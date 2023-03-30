package controllers

import (
	"errors"

	"github.com/gin-gonic/gin"
	"go.mod/dtos"
	"go.mod/models"
	"go.mod/services"

	"net/http"

	"golang.org/x/crypto/bcrypt"
)

func RegisterUserRoutes(router *gin.RouterGroup) {
	router.POST("/signup", usersRegistration)
	router.POST("/login", usersLogin)
}

func usersRegistration(c *gin.Context) {
	var json dtos.RegisterRequestDto
	if err := c.Bind(&json); err != nil {
		c.JSON(http.StatusBadRequest, dtos.CreateBadRequestErrorDto(err))
		return
	}
	password, _ := bcrypt.GenerateFromPassword([]byte(json.Password), bcrypt.DefaultCost)
	user := &models.User{Username: json.Username,
		Password:  string(password),
		FirstName: json.FirstName,
		LastName:  json.LastName,
		Email:     json.Email,
		Phone:     json.Phone,
	}
	if err := services.CreateOne(user); err != nil {
		c.JSON(http.StatusUnprocessableEntity, dtos.CreateDetailedErrorDto("database", err))
		return
	}
	c.Set("currentUser", user)
	c.Redirect(http.StatusMovedPermanently, "/")
	// c.JSON(http.StatusCreated, gin.H{
	// 	"success":       true,
	// 	"full_messages": []string{"User created successfully"}})
}

func usersLogin(c *gin.Context) {

	var json dtos.LoginRequestDto
	if err := c.Bind(&json); err != nil {
		c.JSON(http.StatusBadRequest, dtos.CreateBadRequestErrorDto(err))
		return
	}

	user, err := services.FindOneUser(&models.User{Username: json.Username})
	if err != nil {
		c.JSON(http.StatusForbidden, dtos.CreateDetailedErrorDto("login_error", err))
		return
	}

	if user.IsValidPassword(json.Password) != nil {
		c.JSON(http.StatusForbidden, dtos.CreateDetailedErrorDto("login", errors.New("invalid credentials")))
		return
	}
	c.Set("currentUser", user)
	// c.JSON(http.StatusOK, dtos.CreateLoginSuccessful(&user))
	c.Redirect(http.StatusMovedPermanently, "/")
}

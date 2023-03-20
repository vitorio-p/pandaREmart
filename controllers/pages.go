package controllers

import (
	"errors"
	"net/http"

	"github.com/gin-gonic/gin"
	"go.mod/dtos"
	"go.mod/services"
)

func RegisterPageRoutes(router *gin.RouterGroup) {
	router.GET("", home)
	router.GET("/home", home)

}

func home(c *gin.Context) {

	tags, err := services.FetchAllTags()
	if err != nil {
		c.JSON(http.StatusInternalServerError, dtos.CreateDetailedErrorDto("db_error", err))
	}
	categories, err := services.FetchAllCategories()
	if err != nil {
		c.JSON(http.StatusNotFound, dtos.CreateDetailedErrorDto("comments", errors.New("something went wrong")))
		return
	}

	c.JSON(http.StatusOK, dtos.CreateHomeResponse(tags, categories))
}

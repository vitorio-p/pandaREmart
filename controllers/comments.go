package controllers

import (
	"errors"

	"github.com/gin-gonic/gin"
	"go.mod/dtos"
	"go.mod/infrastructure"
	"go.mod/models"
	"go.mod/services"

	"net/http"
	"strconv"
)

func RegisterCommentRoutes(router *gin.RouterGroup) {
	router.GET("/products/:slug/comments", listComments)
	router.GET("/products/:slug/comments/:id", showComment)
	router.GET("/comments/:id", showComment)

	// router.Use(middlewares.EnforceAuthenticatedMiddleware())
	// {
	router.POST("/products/:slug/comments", createComment)
	router.DELETE("/comments/:id", DeleteComment)
	router.DELETE("/products/:slug/comments/:id", DeleteComment)
	// }

}

func listComments(c *gin.Context) {
	slug := c.Param("slug")
	database := infrastructure.GetDb()
	productId := -1

	err := database.Model(&models.Product{}).Where(&models.Product{Slug: slug}).Select("id").Row().Scan(&productId)
	if err != nil {
		c.JSON(http.StatusNotFound, dtos.CreateDetailedErrorDto("comments", errors.New("invalid slug")))
		return
	}
	pageSizeStr := c.Query("page_size")
	pageStr := c.Query("page")

	pageSize, err := strconv.Atoi(pageSizeStr)
	if err != nil {
		pageSize = 5
	}

	page, err := strconv.Atoi(pageStr)
	if err != nil {
		page = 1
	}
	comments, totalCommentCount := services.FetchCommentsPage(productId, page, pageSize)

	c.JSON(http.StatusOK, dtos.CreateCommentPagedResponse(c.Request, comments, page, pageSize, totalCommentCount, true, false))
}

func createComment(c *gin.Context) {
	slug := c.Param("slug")
	if slug == "" {
		c.JSON(http.StatusBadRequest, dtos.CreateErrorDtoWithMessage("You must provide a product slug you want to comment"))
		return
	}

	var json dtos.Comment
	if err := c.Bind(&json); err != nil {
		c.JSON(http.StatusBadRequest, dtos.CreateBadRequestErrorDto(err))
		return
	}

	productId, err := services.FetchProductId(slug)
	if err != nil {
		c.JSON(http.StatusNotFound, dtos.CreateDetailedErrorDto("database_error", err))
		return
	}

	comment := models.Comment{
		Content:   json.Content,
		ProductId: productId,
		User:      c.MustGet("currentUser").(models.User),
		UserId:    c.MustGet("currentUserId").(uint),
	}

	if err := services.SaveOne(&comment); err != nil {
		c.JSON(http.StatusUnprocessableEntity, dtos.CreateDetailedErrorDto("database_error", err))
		return
	}

	c.JSON(http.StatusOK, dtos.CreateCommentCreatedDto(&comment))
}

func showComment(c *gin.Context) {
	idStr := c.Param("id")
	id, err := strconv.Atoi(idStr)
	if err != nil {
		c.JSON(http.StatusBadRequest, dtos.CreateErrorDtoWithMessage("You must provide a valid comment id"))
	}
	comment := services.FetchCommentById(id, true, true)
	c.JSON(http.StatusOK, dtos.GetCommentDetails(&comment, true, true))
}

func DeleteComment(c *gin.Context) {
	currentUser := c.MustGet("currentUser").(models.User)

	id64, _ := strconv.ParseUint(c.Param("id"), 10, 32)
	id := uint(id64)
	database := infrastructure.GetDb()
	var comment models.Comment
	err := database.Select([]string{"id", "user_id"}).Find(&comment, id).Error
	if err != nil || comment.ID == 0 {
		// the comment.ID == is redundat, but shows the other way of checking but it is less readable
		c.JSON(http.StatusNotFound, dtos.CreateDetailedErrorDto("comment", err))
	} else if currentUser.ID == comment.UserId || currentUser.IsAdmin() {
		err = database.Delete(&comment).Error
		if err != nil {
			c.JSON(http.StatusNotFound, dtos.CreateDetailedErrorDto("database_error", err))
			return
		}
		c.JSON(http.StatusOK, dtos.CreateSuccessWithMessageDto("Comment Deleted successfully"))
	} else {
		c.JSON(http.StatusForbidden, dtos.CreateErrorDtoWithMessage("You have to be admin or the owner of this comment to delete it"))
	}
}

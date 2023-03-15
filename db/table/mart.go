package table

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

type mart struct {
	ID    string  `json:"user_id"`
	Title string  `json:"title"`
	Price float64 `json:"price"`
}

var marts = []mart{
	{ID: "1", Title: "Green Tea", Price: 2.00},
}

func getMart(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, marts)
}

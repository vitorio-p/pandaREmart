package table

import (
	"database/sql"
	"net/http"

	"github.com/gin-gonic/gin"
)

var db *sql.DB

type order struct {
	Status    string            `json:"status,omitempty" dynamodbav:",omitempty"`
	OrderID   string            `json:"order_id"`
	Groceries map[string]string `json:"groceries"`
	CreatedAt int64             `json:"created_at"`
	UserID    string            `json:"user_id"`
}

func getOrder(c *gin.Context) (Order, error) {
	//connect to db and get order with given orderID
	c.IndentedJSON(http.StatusOK, Order)
}

func postOrder(c *gin.Context) {
	var newOrder order
	if err := c.BindJSON(&newOrder); err != nil {
		return
	}
	orders := append(orders, newOrder)
}

func getOrderByID(c *gin.Context) {
	id := c.param("id")

	for _,a:=orders{
		if a.ID == id {
			c.IndentedJSON(http.StatusOK,a)
			return
		}
	}
	c.IndentedJSON(http.StatusNotFound,gin.H{"message":"order not found"})
}

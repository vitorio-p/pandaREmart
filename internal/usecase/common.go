package internal

import "go.mod/db/table"

type Order struct {
	OrderId   string
	Groceries map[string]string
	CreatedAt int32
}

func convertFromTableOrder(order table.Order) (*Order, error) {
	return &Order{
		OrderId:   order.OrderID,
		Groceries: order.Groceries,
		CreatedAt: int32(order.CreatedAt),
	}, nil
}

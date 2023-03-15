package internal

import (
	"fmt"

	"go.mod/db/table"
)

func GetOneOrder(req *api.GetOneOrderRequest) (*api.GetOneOrderResponse, error) {
	order, err := table.GetOrder(req.orderID)
	if err != nil {
		return nil, fmt.Errorf("GetOneOrder return %w", err)
	}

	respOrder, err := convertFromTableOrder(table.Order)
	if err != nil {
		return nil, fmt.Errorf("[GetOneOrder] failed to get order: %v", err)
	}

	return *api.GetOneOrderResponse{
		Data: respOrder,
	}, nil
}

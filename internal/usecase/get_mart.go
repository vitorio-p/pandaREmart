package internal

import (
	"context"
	"fmt"

	"go.mod/db/table"
)

func getMart(c context.Context, *api.GetMartRequest) (*api.GetMartResponse, error) {
	respMart, err := table.GetMart(c)
	if err != nil {
		return nil, fmt.Errorf("GetOneOrder return %w", err)
	}
	return *api.GetMartResponse{
		Data: respMart,
	}, nil
}

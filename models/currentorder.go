package models

import (
	"time"

	"github.com/jinzhu/gorm"
)

type CurrentOrder struct {
	gorm.Model
	Name        string    `gorm:"not null"`
	DateTime    time.Time `gorm:"not null"`
	ReccOrderID uint      `gorm:"not null"`
	SubTotal    float64   `gorm:"not null"`
	DeliveryFee float64   `gorm:"not null"`
	Total       float64   `gorm:"not null"`
}

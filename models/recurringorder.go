package models

import (
	"time"

	"github.com/jinzhu/gorm"
)

type Item struct {
	ID       uint
	Quantity int
}

type ReccuringOrder struct {
	gorm.Model
	Name  string    `gorm:"not null"`
	Day   time.Time `gorm:"not null"`
	Items []Item    `gorm:"not null"`
}

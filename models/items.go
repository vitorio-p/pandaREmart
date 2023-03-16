package models

import (
	"github.com/jinzhu/gorm"
)

type Items struct {
	gorm.Model
	Name  string  `gorm:"not null"`
	Price float64 `gorm:"not null"`
}

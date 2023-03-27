package models

import (
	"time"

	"github.com/jinzhu/gorm"
)

type RecurringOrder struct {
	gorm.Model
	OrderStatus int         `gorm:"default:0"`
	Day         time.Time   `gorm:"not null"`
	Reps        int         `gorm:"not null"`
	OrderItems  []OrderItem `gorm:"foreignKey:OrderId"`
	AddresId    uint

	User   User `gorm:"foreignKey:UserId:"`
	UserId uint `gorm:"default:null"`
}

package models

import (
	"time"

	"github.com/jinzhu/gorm"
)

type RecurringOrder struct {
	gorm.Model
	StartDay   time.Time   `gorm:"not null"`
	Reps       uint        `gorm:"not null"`
	OrderItems []OrderItem `gorm:"foreignKey:OrderId"`
	AddresId   uint

	User   User `gorm:"foreignKey:UserId:"`
	UserId uint `gorm:"default:null"`
}

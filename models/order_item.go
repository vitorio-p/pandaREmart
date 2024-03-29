package models

import "github.com/jinzhu/gorm"

type OrderItem struct {
	gorm.Model
	Order   Order
	OrderId uint `gorm:"not null"`

	RecurringOrder   RecurringOrder
	RecurringOrderId uint `gorm:"default:null"`

	Product   Product
	ProductId uint `gorm:"not null"`

	Slug        string  `gorm:"not null"`
	ProductName string  `gorm:"not null"`
	Price       float32 `gorm:"not null"`
	Quantity    int     `gorm:"not null"`

	User   User `gorm:"association_foreignkey:UserId:"`
	UserId uint `gorm:"default:null"`
}

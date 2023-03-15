package main

import (
	"time"

	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

type Item struct {
	ID       uint
	Quantity int
}

type reccuringOrder struct {
	ID    uint
	Name  string
	Items []Item
	Day   time.Time
}

func connect() {
	dsn := "gorm.db"
	db, err := gorm.Open(sqlite.Open(dsn), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}

	// Migrate scheme
	db.AutoMigrate(&reccuringOrder{})

	//Create a record
	items := []Item{{ID: 1, Quantity: 2}, {ID: 2, Quantity: 4}}
	db.Create(&reccuringOrder{ID: 1, Name: "coke", Items: items, Day: time.Now()})
}

// package config

// import (
// 	"database/sql"
// )

// var (
// 	db *sql.DB
// )

// func connect() {
// 	d, err := sql.Open("mysql", "root:password@tcp(127.0.0.1:3396)/testdb")
// 	if err != nil {
// 		panic(err.Error())
// 	}
// 	db = d
// defer db.Close()

// insert, err := db.Query("INSERT INTO users VALUES('ELLIOT')")
// if err != nil {
// 	panic(err.Error())
// }

// }

// func GetDB() *sql.DB {
// 	return db
// }

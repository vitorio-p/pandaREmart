package main

import (
	"fmt"
	"os"

	"github.com/gin-gonic/contrib/static"
	"github.com/gin-gonic/gin"
	"github.com/jinzhu/gorm"
	"github.com/joho/godotenv"
	"go.mod/controllers"
	"go.mod/infrastructure"
	"go.mod/middlewares"
	"go.mod/models"
	"go.mod/seeds"
)

// func drop(db *gorm.DB) {
// 	db.DropTableIfExists(
// 		&models.FileUpload{},
// 		&models.Comment{},
// 		&models.OrderItem{}, &models.Order{}, &models.Address{},
// 		&models.ProductCategory{}, &models.ProductTag{},
// 		&models.Tag{}, &models.Category{},
// 		&models.Product{},
// 		&models.UserRole{}, &models.Role{}, &models.User{})
// }

func migrate(database *gorm.DB) {

	database.AutoMigrate(&models.Address{})
	// database.AutoMigrate(&models.ReccuringOrder{}, &models.Items{})
	// database.AutoMigrate(&models.CurrentOrder{})
	// database.AutoMigrate(&models.Items{})

	database.AutoMigrate(&models.Category{})
	database.AutoMigrate(&models.Comment{})

	database.AutoMigrate(&models.Order{})
	database.AutoMigrate(&models.OrderItem{})

	database.AutoMigrate(&models.Product{})
	database.AutoMigrate(&models.ProductCategory{})

	database.AutoMigrate(&models.Role{})
	database.AutoMigrate(&models.UserRole{})

	database.AutoMigrate(&models.Tag{})
	database.AutoMigrate(&models.ProductTag{})

	database.AutoMigrate(&models.User{})

	database.AutoMigrate(&models.FileUpload{})
}

func create(database *gorm.DB) {
	migrate(database)
}

func main() {

	e := godotenv.Load() //Load .env file
	if e != nil {
		fmt.Print(e)
	}

	database := infrastructure.OpenDbConnection()

	defer database.Close()
	args := os.Args
	if len(args) > 1 {
		first := args[1]
		second := ""
		if len(args) > 2 {
			second = args[2]
		}

		if first == "create" {
			create(database)
		} else if first == "seed" {
			seeds.Seed()
			os.Exit(0)
		} else if first == "migrate" {
			migrate(database)
		}

		if second == "seed" {
			seeds.Seed()
			os.Exit(0)
		} else if first == "migrate" {
			migrate(database)
		}

		if first != "" && second == "" {
			os.Exit(0)
		}
	}

	migrate(database)

	gin.New() // - new gin Instance with no middlewares

	goGonicEngine := gin.Default() // gin with the Logger and Recovery Middlewares attached
	goGonicEngine.Use(gin.Logger())
	goGonicEngine.Use(gin.Recovery())
	goGonicEngine.Use(middlewares.Benchmark())
	goGonicEngine.Use(middlewares.Cors())
	// goGonicEngine.Use(middlewares.UserLoaderMiddleware())
	//read frontend npm run build local file
	goGonicEngine.Use(static.Serve("/", static.LocalFile("./build", true)))

	controllers.RegisterUserRoutes(goGonicEngine.Group("/users"))
	controllers.RegisterProductRoutes(goGonicEngine.Group("/products"))
	controllers.RegisterCommentRoutes(goGonicEngine.Group("/"))
	controllers.RegisterPageRoutes(goGonicEngine.Group("/"))
	controllers.RegisterAddressesRoutes(goGonicEngine.Group("/users"))
	controllers.RegisterTagRoutes(goGonicEngine.Group("/tags"))
	controllers.RegisterCategoryRoutes(goGonicEngine.Group("/categories"))
	controllers.RegisterOrderRoutes(goGonicEngine.Group("/orders"))

	goGonicEngine.Run(":8080") // listen and serve on 0.0.0.0:8080
}

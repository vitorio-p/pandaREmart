package dtos

import (
	"strings"

	"go.mod/models"
)

func CreateCategoryListMapDto(categories []models.Category) map[string]interface{} {
	result := map[string]interface{}{}
	var t = make([]interface{}, len(categories))
	for i := 0; i < len(categories); i++ {
		t[i] = CreateCategoryDto(categories[i])
	}
	result["categories"] = t
	return CreateSuccessDto(result)
}

func CreateCategoryListDto(categories []models.Category) []interface{} {
	var t = make([]interface{}, len(categories))
	for i := 0; i < len(categories); i++ {
		t[i] = CreateCategoryDto(categories[i])
	}
	return t
}

func CreateCategoryDto(category models.Category) map[string]interface{} {
	var imageUrls = make([]string, len(category.Images))
	replaceAllFlag := -1
	for i := 0; i < len(category.Images); i++ {
		imageUrls[i] = strings.Replace(category.Images[i].FilePath, "\\", "/", replaceAllFlag)
	}
	return map[string]interface{}{
		"id":          category.ID,
		"name":        category.Name,
		"description": category.Description,
		"image_urls":  imageUrls,
	}
}

func CreateCategoryCreatedDto(category models.Category) map[string]interface{} {
	return CreateSuccessWithDtoAndMessageDto(CreateCategoryDto(category), "Category created successfully")
}

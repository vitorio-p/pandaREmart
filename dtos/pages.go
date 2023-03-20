package dtos

import "go.mod/models"

func CreateHomeResponse(tags []models.Tag, categories []models.Category) map[string]interface{} {
	return createSuccess(map[string]interface{}{
		"tags":       CreateTagListDto(tags),
		"categories": createCategoryList(categories),
	})
}

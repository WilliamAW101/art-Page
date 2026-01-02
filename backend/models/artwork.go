package models

import "time"

type Artwork struct {
	ID           int       `json:"id"`
	Title        string    `json:"title"`
	Discription  string    `json:"description"`
	ImageURL     string    `json:"image_url"`
	CreatedAt    time.Time `json:"created_at"`
	UpdatedAt    time.Time `json:"updated_at"`
	Width        int       `json:"width"`
	Height       int       `json:"height"`
	DisplayOrder int       `json:"display_order"`
	AltText      string    `json:"alt_text"`
}

type JSONArtworkResponse struct {
	Code    int         `json:"code"`
	Message string      `json:"message,omitempty"`
	Data    interface{} `json:"data,omitempty"`
}

type JSONArtworkErrorResponse struct {
	Code    int    `json:"code"`
	Message string `json:"message"`
}

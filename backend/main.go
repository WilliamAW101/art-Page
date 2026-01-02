package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/Angelo/artpage-backend/database"
	"github.com/Angelo/artpage-backend/models"
	"github.com/gorilla/mux"
	"github.com/joho/godotenv"
)

type ArtworkHandler struct {
	DB *sql.DB // Store database connection
}

func NewArtworkHandler(db *sql.DB) *ArtworkHandler {
	return &ArtworkHandler{DB: db}
}

// load variables from .env
func init() {
	err := godotenv.Load()

	if err != nil {
		log.Print("No .env file found")
	}
}

func SetupRoutes(db *sql.DB) http.Handler {
	r := mux.NewRouter()

	// Create handlers with database connection
	artworkHandler := NewArtworkHandler(db)

	// API routes
	api := r.PathPrefix("/api").Subrouter()

	// Artwork routes
	api.HandleFunc("/homepage", artworkHandler.getFeatured).Methods("GET")

	return r
}

func (h *ArtworkHandler) getFeatured(w http.ResponseWriter, r *http.Request) {
	log.Println("GET /api/homepage called")

	query := `SELECT id, title, description, image_url, created_at, updated_at, width, height, display_order, alt_text
			  FROM artworks
			  WHERE featured = TRUE
			  ORDER BY display_order ASC`

	rows, err := h.DB.Query(query)
	if err != nil {
		http.Error(w, "Failed to fetch featured artworks"+err.Error(), http.StatusInternalServerError)
		return
	}
	defer rows.Close()

	var artworks []models.Artwork
	for rows.Next() {
		var art models.Artwork
		err := rows.Scan(&art.ID, &art.Title, &art.Discription, &art.ImageURL, &art.CreatedAt, &art.UpdatedAt, &art.Width, &art.Height, &art.DisplayOrder, &art.AltText)
		if err != nil {
			log.Println("Failed to grab a featured image")
			continue
		}
		artworks = append(artworks, art)
	}

	response := models.JSONArtworkResponse{
		Code:    200,
		Message: "success",
		Data:    artworks,
	}
	log.Println("Successfully GET featured artwork!")

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(response)
}

func main() {
	// connect to database Test
	db, err := database.Connect(os.Getenv("DB_HOST"), os.Getenv("DB_PORT"), os.Getenv("DB_USER"), os.Getenv("DB_PASS"), os.Getenv("DB_NAME"))
	if err != nil {
		log.Fatal("Failed to connect to database:", err)
	}
	defer db.Close()

	log.Println("Database Connection Success")

	// Test connection
	if err := db.Ping(); err != nil {
		log.Fatal("Database ping failed:", err)
	}

	routes := SetupRoutes(db)

	fmt.Println("Server starting on port 8080...")
	log.Fatal(http.ListenAndServe(":8080", routes))
}

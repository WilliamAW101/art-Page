package main

import (
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/Angelo/artpage-backend/database"
	"github.com/gorilla/mux"
	"github.com/joho/godotenv"
)

// load variables from .env
func init() {
	err := godotenv.Load()

	if err != nil {
		log.Print("No .env file found")
	}
}

func homeHandler(w http.ResponseWriter, r *http.Request) {

	// connect to database Test
	connection, err := database.Connect(os.Getenv("DB_HOST"), os.Getenv("DB_PORT"), os.Getenv("DB_USER"), os.Getenv("DB_PASS"), os.Getenv("DB_NAME"))
	if err != nil {
		http.Error(w, "Database connection error "+err.Error(), http.StatusInternalServerError)
		return
	}
	defer connection.Close()

	fmt.Fprintf(w, "Welcome to our website!")
}

// func aboutHandler(w http.ResponseWriter, r *http.Request) {
// 	fmt.Fprintf(w, "About our company")
// }

func main() {
	// Create a new router
	r := mux.NewRouter()

	// Register routes
	r.HandleFunc("/", homeHandler).Methods("GET")
	// r.HandleFunc("/about", aboutHandler).Methods("GET")

	fmt.Println("Server starting on port 8080...")
	log.Fatal(http.ListenAndServe(":8080", r))
}

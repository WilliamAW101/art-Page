package main

import (
    "fmt"
    "log"
    "net/http"

    "github.com/gorilla/mux"
)

func homeHandler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "Welcome to our website!")
}

func aboutHandler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "About our company")
}

func main() {
    // Create a new router
    r := mux.NewRouter()

    // Register routes
    r.HandleFunc("/", homeHandler).Methods("GET")
    r.HandleFunc("/about", aboutHandler).Methods("GET")

    fmt.Println("Server starting on port 8080...")
    log.Fatal(http.ListenAndServe(":8080", r))
}

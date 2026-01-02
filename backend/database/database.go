package database

import (
	"database/sql"
	"fmt"

	_ "github.com/lib/pq"
)

// Connect creates a database connection pool
func Connect(host, port, user, pass, dbname string) (*sql.DB, error) {
	connStr := fmt.Sprintf("host=%s port=%s user=%s password=%s dbname=%s", host, port, user, pass, dbname)

	// Open connection pool
	db, err := sql.Open("postgres", connStr)
	if err != nil {
		return nil, fmt.Errorf("failed to open database: %w", err)
	}

	// Test the connection
	if err := db.Ping(); err != nil {
		return nil, fmt.Errorf("failed to ping database: %w", err)
	}

	// Configure connection pool (optional but recommended)
	db.SetMaxOpenConns(25) // Max 25 connections
	db.SetMaxIdleConns(5)  // Keep 5 idle connections

	return db, nil
}

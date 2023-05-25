package main

import (
	"fmt"
	"os"
	"path/filepath"
)

func deleteSchema(collection string) error {
	targetPath := filepath.Join("..", "..", "cms", "src", "api", collection, "content-types", collection, "schema.json")

	err := os.Remove(targetPath)
	if err != nil {
		return err
	}

	return nil
}

func main() {
	if err := deleteSchema("seperator2"); err != nil {
		fmt.Println("Error deleting schema:", err)
		os.Exit(1)
	}
}

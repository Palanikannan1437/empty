package main

import (
	"fmt"
	"io/ioutil"
	"os"
	"path/filepath"
)

func getSchemaPath() string {
	schemaPath := filepath.Join("dist", "schema.json")
	println(schemaPath)
	return schemaPath
}

func copySchema(schemaPath string) error {
	targetPath := filepath.Join("..", "..", "cms", "src", "api", "separator2", "content-types", "separator2", "schema.json")

	data, err := ioutil.ReadFile(schemaPath)
	if err != nil {
		return err
	}

	err = os.MkdirAll(filepath.Dir(targetPath), 0755)
	if err != nil {
		return err
	}

	err = ioutil.WriteFile(targetPath, data, 0644)
	if err != nil {
		return err
	}

	return nil
}

func main() {
	schemaPath := getSchemaPath()

	if err := copySchema(schemaPath); err != nil {
		fmt.Println("Error copying schema:", err)
		os.Exit(1)
	}
}

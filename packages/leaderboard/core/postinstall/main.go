package main

import (
	"fmt"
	"io/ioutil"
	"os"
	"path/filepath"
	"runtime"
)

func getSchemaPath() string {
	currentPath := absPath()
	schemaPath := filepath.Join(currentPath, "..", "..", "dist", "schema.json")
	return schemaPath
}

func copySchema(schemaPath string, collection string) error {
	fmt.Print("Enter the path of your CMS directory: ")

	//Declare variable to store input
	var cmsDir string

	//Take input from user
	fmt.Scanln(&cmsDir)

	targetPath := filepath.Join(cmsDir, "src", "api", collection, "content-types", collection, "schema.json")

	fmt.Println(targetPath)
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

func absPath() string {
	_, currentFilePath, _, _ := runtime.Caller(0)
	currentDir := filepath.Dir(currentFilePath)
	return currentDir
}

func main() {
	absPath()

	schemaPath := getSchemaPath()

	if err := copySchema(schemaPath, "seperator2"); err != nil {
		fmt.Println("Error copying schema:", err)
		os.Exit(1)
	}
}

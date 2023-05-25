package main

import (
	"fmt"
	"io/ioutil"
	"os"
	"os/exec"
	"path/filepath"
	"runtime"
)

func getSchemaPath() string {
	currentPath := absPath()
	schemaPath := filepath.Join(currentPath, "..", "..", "dist", "config.json")
	return schemaPath
}

func getComposePath() string {
	currentPath := absPath()
	schemaPath := filepath.Join(currentPath, "..", "..", "dist", "docker-compose.yml")
	return schemaPath
}

func copySchema(configFilePath string, dockerComposePath string) error {
	fmt.Print("Enter the path of your preferred directory to initialize leaderboard: ")

	//Declare variable to store input
	var leaderboardDir string

	//Take input from user
	fmt.Scanln(&leaderboardDir)

	//copy config file
	targetPath := filepath.Join(leaderboardDir, "server", "config.json")

	fmt.Println(targetPath)

	data, err := ioutil.ReadFile(configFilePath)
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

	// copy docker file
	targetPathDocker := filepath.Join(leaderboardDir, "docker-compose.yml")

	fmt.Println(targetPathDocker)

	dataDocker, err := ioutil.ReadFile(dockerComposePath)
	if err != nil {
		return err
	}

	err = os.MkdirAll(filepath.Dir(targetPathDocker), 0755)
	if err != nil {
		return err
	}

	err = ioutil.WriteFile(targetPathDocker, dataDocker, 0644)
	if err != nil {
		return err
	}

	fmt.Println("Running leaderboard instance with default config, you can edit it in config.json!!")

	cmd := exec.Command("docker-compose", "-f", targetPathDocker, "up", "-d")
	cmd.Stdin = os.Stdin
	cmd.Stdout = os.Stdout
	cmd.Stderr = os.Stderr
	err = cmd.Run()
	if err != nil {
		fmt.Println("Error ", err)
		os.Exit(1)
	}
	return nil
}

func absPath() string {
	_, currentFilePath, _, _ := runtime.Caller(0)
	currentDir := filepath.Dir(currentFilePath)
	return currentDir
}

func main() {
	schemaPath := getSchemaPath()
	dockerComposePath := getComposePath()
	if err := copySchema(schemaPath, dockerComposePath); err != nil {
		fmt.Println("Error copying schema:", err)
		os.Exit(1)
	}

}

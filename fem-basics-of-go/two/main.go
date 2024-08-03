package main

import (
	"fmt"

	"alexvyber.dev/two/sub"
)

func main() {
	print("main")
	var some = "1234"

	{
		var some = "asdf"
		print(some)
	}

	print(some)
	printData()

	fmt.Println("fmt println")
	fmt.Println("fmt println")
	fmt.Println("fmt println")
	fmt.Println(sub.Some)
}

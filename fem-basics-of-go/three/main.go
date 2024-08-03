package main

import (
	"fmt"
	"math/rand"
)

func calc(price float32) (float32, float32, int) {
	return price * 0.09, price * 0.02, rand.Intn(1000)
}

func addOne(num *int) {
	*num++
}

func main() {
	one, two, three := calc(rand.Float32() * 1000000)
	fmt.Println(one, two, three)

	some := 10
	addOne(&some)
	fmt.Println()

	addOne(&some)
	fmt.Println(some)
	addOne(&some)
	fmt.Println(some)
	addOne(&some)
	fmt.Println(some)
	addOne(&some)
	fmt.Println(some)
	addOne(&some)
	fmt.Println(some)
	addOne(&some)
	fmt.Println(some)
	addOne(&some)
	fmt.Println(some)
}

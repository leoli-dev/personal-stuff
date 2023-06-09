package main

import "fmt"

func main() {
	numbers := getNumbers()
	length := len(numbers)

	for i := 0; i < length; i++ {
		current := numbers[i]
		if current%2 == 0 {
			fmt.Printf("%d is even\n", current)
		} else {
			fmt.Printf("%d is odd\n", current)
		}

	}
}

func getNumbers() []int {
	return []int{0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
}

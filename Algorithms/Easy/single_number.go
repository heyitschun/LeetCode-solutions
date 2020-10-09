package easy

/*
Given an array of integers, find the integer that appears once.
*/

func SingleNumber(nums []int) int {
	answer := 0

	for _, n := range nums {
		answer ^= n
	}

	return answer
}

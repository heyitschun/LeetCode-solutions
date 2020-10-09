package easy

import (
	"fmt"
	"testing"
)

type singlenumpairs struct {
	nums   []int
	single int
}

var single_num_tests = []singlenumpairs{
	{[]int{2, 2, 1}, 1},
	{[]int{4, 1, 2, 1, 2}, 4},
	{[]int{1}, 1},
}

func TestSingleNumber(t *testing.T) {
	for _, pair := range single_num_tests {
		s := SingleNumber(pair.nums)
		fmt.Println(pair.nums, "->", s)
		if s != pair.single {
			t.Error(
				"For", pair.nums,
				"expected", pair.single,
				"got", s,
			)
		}
	}
}

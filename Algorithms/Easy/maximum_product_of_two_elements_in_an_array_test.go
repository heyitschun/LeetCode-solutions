package easy

import (
	"fmt"
	"testing"
)

type sumpair struct {
	arr []int
	ans int
}

var sumpairtests = []sumpair{
	{[]int{3, 4, 5, 2}, 12},
	{[]int{1, 5, 4, 5}, 16},
	{[]int{3, 7}, 12},
}

func TestMaxProduct(t *testing.T) {
	for _, pair := range sumpairtests {
		p := MaxProduct(pair.arr)
		fmt.Println(pair.arr, "->", p)
		if p != pair.ans {
			t.Error(
				"For", pair.arr,
				"expected", pair.ans,
				"got", p,
			)
		}
	}
}

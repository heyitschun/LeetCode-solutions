package easy

import (
	"fmt"
	"testing"
)

type palindomepair struct {
	n          int
	palindrome bool
}

var palindometests = []palindomepair{
	{121, true},
	{-121, false},
	{10, false},
	{-101, false},
}

func TestIsPalindrome(t *testing.T) {
	for _, pair := range palindometests {
		p := IsPalindrome(pair.n)
		fmt.Println(pair.n, "->", p)
		if p != pair.palindrome {
			t.Error(
				"For", pair.n,
				"expected", pair.palindrome,
				"got", p,
			)
		}
	}
}

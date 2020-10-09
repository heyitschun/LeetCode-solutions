package easy

import (
	"fmt"
	"testing"
)

type palindromepair struct {
	n          int
	palindrome bool
}

var palindrometests = []palindromepair{
	{121, true},
	{-121, false},
	{10, false},
	{-101, false},
}

func TestIsPalindrome(t *testing.T) {
	for _, pair := range palindrometests {
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

package easy

/*
Determine whether an integer is a palindrome.

Example
=======

x = 121

>>> True

Constraints
===========
- Do not use string conversion.
- Negative numbers do not count as palindromes.
*/

func IsPalindrome(x int) bool {
	if x < 0 {
		return false
	}

	y := x
	rev_int := 0
	tmp := 0
	for x > 0 {
		tmp = x % 10
		rev_int = rev_int*10 + tmp
		x = (x - tmp) / 10
	}

	return rev_int == y
}

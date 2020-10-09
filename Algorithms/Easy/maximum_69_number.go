package easy

/*
Given a positive integer num consisting only of digits 6 and 9.

Return the maximum number you can get by changing at most one digit
(6 becomes 9, and 9 becomes 6).
*/

func Maximum69Number(num int) int {
	tmp := num
	highest_six_base := 0
	curr_base := 1
	for tmp != 0 {
		if tmp%10 == 6 {
			highest_six_base = curr_base
		}
		tmp /= 10
		curr_base *= 10
	}

	return num - (highest_six_base * 6) + (highest_six_base * 9)
}

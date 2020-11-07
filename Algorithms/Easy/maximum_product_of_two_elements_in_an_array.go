package easy

/*
Given the array of integers `nums`, choose two different indices `i` and `j`.

Return the maximum value of `(nums[i]-1) * (nums[j]-1)`.

Example
-------

nums = [3, 4, 5, 2]

>>> 12
*/

func MaxProduct(nums []int) int {
	i := 0 // The largest number
	j := 0 // The second largest number

	for _, n := range nums {
		if n > j {
			if n > i {
				j = i
				i = n
				continue
			}
			j = n
		}
	}

	return (i - 1) * (j - 1)
}

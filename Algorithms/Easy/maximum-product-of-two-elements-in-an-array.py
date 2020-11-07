"""
Given the array of integers `nums`, choose two different indices `i` and `j`.

Return the maximum value of `(nums[i]-1) * (nums[j]-1)`.

Example
-------

nums = [3, 4, 5, 2]

>>> 12
"""

def max_product(nums):
    i = 0 # The largest number
    j = 0 # The second largest number
    for n in nums:
        if n > j:
            if n > i:
                j = i
                i = n
                continue
            j = n
        print(n, i, j)
    return (i-1) * (j-1)

nums = [1, 5, 4, 5]

answer = max_product(nums)

print(answer)

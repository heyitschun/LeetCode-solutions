# Given two non-negative integers low and high. Return the count of odd
# numbers between low and high (inclusive).
# 
# Example
# =======
#
# low = 3
# high = 7
#
# >>> 3

import math

def count_odds(low, high):
    count = (high+1-low)/2
    if low % 2 == 1:
        return math.ceil(count)
    else:
        return math.floor(count)

low = 8
high = 10

answer = count_odds(low, high)

print(answer)

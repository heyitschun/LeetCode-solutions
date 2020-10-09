"""
Given a positive integer num, consisting of only digits 6 and 9.

Return the maximum number you can get by changing at most one digit to the
other.

Example
=======

num = 9669

>>> 9969

Constraints
===========

- 1 <= num <= 10^4
- num digits are 6 or 9
- Do it without string conversion
"""

def maximum69Number(num):
    tmp = num
    highest_six_base = 0
    curr_base = 1
    while tmp != 0:
        if tmp%10 == 6:
            highest_six_base = curr_base
        tmp //= 10
        curr_base *= 10

    return num-(highest_six_base*6) + (highest_six_base*9)

num = 6969

answer = maximum69Number(num)

print(">>>")
print(answer)

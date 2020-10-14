"""
Write a function that reverses a string. The input string is given as
an array of characters.

Do not allocate extra memory for another array. The solution must involve
modifying the array in-place.

All characters consist of printable ASCII characters.

Example
-------

s = ["h", "e", "l", "l", "o"]

>>> ["o", "l", "l", "e", "h"]
"""

def reverse_string(s):
    l = 0
    r = len(s)-1
    while r > (len(s)//2)-1:
        s[l], s[r] = s[r], s[l]
        r -= 1
        l += 1

    return s

s = ["h", "e", "l", "c", "o"]

answer = reverse_string(s)

print(answer)

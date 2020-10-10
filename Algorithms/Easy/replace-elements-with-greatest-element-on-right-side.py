"""
Given an array arr, replace every element in that array with the greatest
element among the elements to its right, and a replace the last element
with -1.

Example
=======

arr = [17,18,5,4,6,1]

>>> [18,6,6,6,1,-1]
"""

def replace_elements(arr):
    highest_right = 0
    i = len(arr)-1
    while i >= 0:
        tmp = arr[i]
        arr[i] = highest_right
        if tmp > highest_right:
            highest_right = tmp

        i -= 1

    arr[-1] = -1

    return arr


arr = [17,18,5,4,6,1]

answer = replace_elements(arr)

print(answer)



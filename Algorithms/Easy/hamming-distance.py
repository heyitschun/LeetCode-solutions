"""
The Hamming distance between two integers is the number of positions at which
the corresponding bits are different.

Example
-------

x = 1
y = 4

>>> 2

Constraints
-----------
0 <= x, y < 2^31
"""

def hamming_distance(x, y):
    answer = 0
    for i in range(0, 32):
        b1 = x>>i&1
        b2 = y>>i&1
        if not b1 == b2:
            answer += 1

    return answer

x = 1
y = 4

answer = hamming_distance(x, y)

print(answer)

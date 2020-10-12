"""
Given head which is a reference node to a singly-linked list. The value of each
node in the linked list is either 0 or 1. The linked list holds the binary
representation of a number.

Return the decimal value of the number in the linked list.


Example
=======

head = [1,0,1]

>>> 5
"""

def get_decimal_value(head):
    curr = head
    bins = []
    answer = 0
    while curr.next != None:
        bins.append(curr.val)
        curr = curr.next
    else:
        bins.append(curr.val)

    i = len(bins)
    while i > 0:
        answer += bins[i-1]*2**(len(bins)-i)

        i -= 1

    return answer

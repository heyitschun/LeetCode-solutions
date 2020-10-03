# You have an array of length n where arr[i] = (2*i) + 1
# for all valid values of i (0 <= i < n).
#
# In one operation, you may select two indices, x and y, and subtract 1 from
# arr[x] and add 1 to arr[y]. The goal is to make all the elements equal.
#
# Return the minimum number of operations needed to make all elements equal

def min_operations(n):
    answer = 0
    top = (2*(n-1)) + 1
    mid = (top//2) + (top%2)

    for x in range(n//2):
        answer += mid - ((2*x) + 1)

    return answer

n = 6

answer = min_operations(n)

print(answer)

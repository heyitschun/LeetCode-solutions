def majority_element(nums):
    d = {k: 0 for k in nums}
    majority = len(nums) // 2 + 1
    for n in nums:
        d[n] += 1
        if d[n] == majority:
            return n
    return -1

n = [2, 2, 1, 1, 1, 2, 2]

answer = majority_element(n)
print(answer)
# comment


# You are given two equal sized strings s and t. In one step you can choose
# any character of t and replace it with another character.
#
# Return the minimum number of steps to make t an anagram of s.

def min_steps(s, t):
    answer = 0
    s_arr = [0 for l in range(26)]
    t_arr = [0 for l in range(26)]

    for i in range(len(s)):
        s_char = ord(s[i])-97
        t_char = ord(t[i])-97

        s_arr[s_char] += 1
        t_arr[t_char] += 1

    for (x, y) in zip(s_arr, t_arr):
        answer += abs(x - y)

    return answer // 2

s = "bab"
t = "aba"

answer = min_steps(s, t)

print(answer)

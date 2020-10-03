# There are n soldiers standing in a line. Each soldier is assigned a unique 
# rating value.
# 
# You have to form a team of 3 soldiers amongst them under the following rules:
# Choose 3 soldiers with index (i, j, k) with rating 
# (rating[i], rating[j], rating[k]).
# A team is valid if:  (rating[i] < rating[j] < rating[k])
# or (rating[i] > rating[j] > rating[k]) where (0 <= i < j < k < n).
#
# Return the number of teams you can form given the conditions.
# (soldiers can be part of multiple teams).
#
# Example
# =======
#
# rating = [2,5,3,4,1]
#
# >>> 3

def numTeams(rating):
    answer = 0
    n = len(rating)

    for i in range(n):
        for j in range(n):
            if j < i:
                continue
            for k in range(n):
                if j < k:
                    if rating[i] < rating[j] < rating[k]:
                        answer += 1
                    elif rating[i] > rating[j] > rating[k]:
                        answer += 1

    return answer

rating = [2,1,3]
answer = numTeams(rating)

print(answer)

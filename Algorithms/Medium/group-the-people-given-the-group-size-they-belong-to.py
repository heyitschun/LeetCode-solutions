# There are n people that are split into some unknown number of groups.
# Each person is labeled with a unique ID from 0 to n - 1.
# 
# You are given an integer array groupSizes, where groupSizes[i] is the size of
# the group that person i is in.
#
# Return a list of groups such that each person i is in a group of size
# groupSizes[i].
#
# Each person should appear in exactly one group.
# Every person must be in a group.

def group_the_people(group_sizes):
    groups = []
    groups_dict = {}

    for i, p in enumerate(group_sizes):
        try:
            groups_dict[p].append(i)
        except:
            groups_dict[p] = [i]

        if len(groups_dict[p]) == p:
            groups.append(groups_dict.pop(p))

    return groups


group_sizes = [2, 1, 3, 3, 3, 2]
answer = group_the_people(group_sizes)

print(answer)

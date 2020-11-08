"""
Given two arrays `startTime` and `endTime` and an integer `querytime`, find
the number of times that query time `q` is within the bounds of start time `s`
and end time `e`.

Example
-------

startTime = [1, 2, 3]
endTime = [3, 2, 7]
queryTime = 4

>>> 1
"""

def busy_student(start_time, end_time, query_time):
    answer = 0

    for (s, e) in zip(start_time, end_time):
        if query_time >= s and query_time <= e:
            answer += 1

    return answer

start_time = [1, 2, 3]
end_time = [3, 2, 7]
query_time = 4

answer = busy_student(start_time, end_time, query_time)

print(answer)

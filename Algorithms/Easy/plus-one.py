def plus_one(digits):
    t = len(digits)-1
    new = 0
    for n in digits:
        new += 10**(t)*n
        t -= 1

    new += 1
    
    answer = []

    return answer

d = [1,2,3]

answer = plus_one(d)

print(answer)

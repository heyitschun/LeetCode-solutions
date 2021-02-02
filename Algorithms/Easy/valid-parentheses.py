"""
Given a string containing just the characters '(', ')', '[', ']', '{' or '}',
determine if the input string is valid.

The input string is valid if:

1. Open brackets are closed by the same type of brackets.
2. Open brackets are closed in the correct order.
"""

class Stack:
    def __init__(self):
        self.data = []

    def push(self, elem):
        self.data.append(elem)

    def pop(self):
        return self.data.pop()

    def read(self):
        return self.data[-1]

def isVal(string):
    s = Stack()
    d = {
        "}": "{",
        "]": "[",
        ")": "(",
    }
    for c in string:
        if c in ["{", "[", "("]:
            s.push(c)
        elif c in ["}", "]", ")"]:
            try:
                op = s.pop()
                if not op == d[c]:
                    return False
            except:
                return False
    try:
        s.read()
        return False
    except:
        return True

    return True


s = "(()[])"
answer = isVal(s)
print(answer)

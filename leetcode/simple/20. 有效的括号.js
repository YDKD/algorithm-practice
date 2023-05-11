

// 方式一、栈实现，不太行
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if (s.length % 2 !== 0) return false
    class Stack {
        stack = []
        pop() {
            return this.stack.pop()
        }

        push(n) {
            return this.stack.push(n)
        }

        isEmpty() {
            return this.stack.length === 0
        }

        get size() {
            return this.stack.length
        }
    }
    const tempStack = new Stack()

    const passWhite = ['()', '{}', '[]']

    if (typeof s !== 'string') return false

    if (s.length === 0) return false

    s.split('').forEach((t) => {
        if (tempStack.size === 0) {
            tempStack.push(t)
        } else {
            const popItem = tempStack.pop()
            const cur = popItem + t

            if (!passWhite.includes(cur)) {
                tempStack.push(popItem)
                tempStack.push(t)
            }
        }
    })

    return tempStack.isEmpty()
};

var s = "({[)"

console.log('valida---1', isValid(s))

// 方式二、字符串匹配，

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid2 = function (s) {
    let len = s.length;
    if (len % 2 !== 0) {
        return false;
    }
    let length = len / 2;
    for (let i = 0; i < length; i++) {
        s = s.replace("()", "");
        s = s.replace("{}", "");
        s = s.replace("[]", "");
    }

    return s.length === 0;
};

var s2 = '([{}])'
console.log('valida---2', isValid(s2))
console.log('valida---2', isValid2(s2))

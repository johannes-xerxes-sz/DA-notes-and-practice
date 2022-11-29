/* LC : 20. Valid Parentheses : Easy

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:
  Open brackets must be closed by the same type of brackets.
  Open brackets must be closed in the correct order.

e.g.
Input: s = "()"
Output: true

e.g.
Input: s = "()[]{}"
Output: true

e.g.
Input: s = "(]"
Output: false

Constraints:
  1 <= s.length <= 104
  s consists of parentheses only '()[]{}'.
*/

var isValid = function(s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === ')') {
      if (stack[stack.length - 1] === '(') {
        stack.pop()
        continue;
      }
    }
    if (s[i] === ']') {
      if (stack[stack.length - 1] === '[') {
        stack.pop();
        continue;
      }
    }
    if (s[i] === '}') {
      if (stack[stack.length - 1] === '{') {
        stack.pop();
        continue;
      }
    }

    stack.push(s[i])
  }

  return stack.length === 0;
};

// TESTS:
console.log('isValid("()") => true', isValid("()") === true)
console.log('isValid("()[]{}") => true', isValid("()[]{}") === true)
console.log('isValid("(]") => false', isValid("(]") === false)

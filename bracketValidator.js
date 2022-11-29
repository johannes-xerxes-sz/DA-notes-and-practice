/*
Interview Cake Weekly Problem # 385

You're working with an intern that keeps coming to you with JavaScript code that won't run because the braces, brackets, and parentheses are off. To save you both some time, you decide to write a braces/brackets/parentheses validator.

Let's say:

  '(', '{', '[' are called "openers."
  ')', '}', ']' are called "closers."

Write an efficient function that tells us whether or not an input string's openers and closers are properly nested.

e.g.
  "{ [ ] ( ) }" should return true
  "{ [ ( ] ) }" should return false
  "{ [ }" should return false
*/

let bracketValidator = (input) => {
  let stack = [],
      splitted = input.split(' ');

  for (let i = 0; i < splitted.length; i++) {
    if (splitted[i] === '{' || splitted[i] === '[' || splitted[i] === '(') {
      stack.push(splitted[i]);
    }

    if (splitted[i] === '}') {
      if (stack[stack.length - 1] === '{') {
        stack.pop();
        continue;
      } else {
        return  'brackets are NOT validly nested';
      }
    }

    if (splitted[i] === ']') {
      if (stack[stack.length - 1] === '[') {
        stack.pop();
        continue;
      } else {
        return  'brackets are NOT validly nested';
      }
    }

    if (splitted[i] === ')') {
      if (stack[stack.length - 1] === '(') {
        stack.pop();
        continue;
      } else {
        return  'brackets are NOT validly nested';
      }
    }

  }

  return 'brackets are validly nested'
}



console.log('bracketValidator("{ [ ] ( ) }") => valid', bracketValidator("{ [ ] ( ) }") === 'brackets are validly nested');
console.log('bracketValidator("{ [ ( ] ) }") => invalid', bracketValidator("{ [ ( ] ) }") === 'brackets are NOT validly nested');
console.log('bracketValidator("{ [ }") => invalid', bracketValidator("{ [ }") === 'brackets are NOT validly nested'); => false', bracketValidator("{ [ }") === false)

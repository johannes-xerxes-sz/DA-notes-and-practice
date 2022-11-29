/*
You own a Goal Parser that can interpret a string command. The command consists of an alphabet of "G", "()" and/or "(al)"
in some order. The Goal Parser will interpret "G" as the string "G",
"()" as the string "o", and
"(al)" as the string "al".
The interpreted strings are then concatenated in the original order.
Given the string command, return the Goal Parser's interpretation of command.

e.g.
Input: command = "G()(al)"
Output: "Goal"
Explanation: The Goal Parser interprets the command as follows:
G -> G
() -> o
(al) -> al
The final concatenated result is "Goal".

e.g.
Input: command = "G()()()()(al)"
Output: "Gooooal"

e.g.
Input: command = "(al)G(al)()()G"
Output: "alGalooG"

Constraints:

    1 <= command.length <= 100
    command consists of "G", "()", and/or "(al)" in some order.
*/

let interpret = (command) => {
  let resultArr = [];

  for (let i = 0; i < command.length; i++) {
    if (command[i] === 'G') {
      resultArr.push('G');
    }
    if (command[i] === '(' && command[i + 1] === ')') {
      resultArr.push('o');
      i++;
    }
    if (command[i] === '(' && command[i + 1] === 'a') {
      resultArr.push('al');
      i+= 3;
    }
  }
  return resultArr.join('');
};

//can leave out last if block, but less readable?
var interpret = (command) => {
  let resultArr = [];

  for (let i = 0; i < command.length; i++) {
    if (command[i] === 'G') {
      resultArr.push('G');
      continue;
    }
    if (command[i] === '(' && command[i + 1] === ')') {
      resultArr.push('o');
      i++;
      continue;
    }
    resultArr.push('al');
    i+= 3;

  }
  return resultArr.join('');
};

console.log(' interpret("G()(al)") === "Goal"  ', interpret('G()(al)') === 'Goal' )
console.log(' interpret("G()()()()(al)") === "Gooooal"  ', interpret("G()()()()(al)") === 'Gooooal' )

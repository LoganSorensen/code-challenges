function balancedBrackets(string) {
  const splitString = string.split("");
  const brackets = ["(", ")", "{", "}", "[", "]", "|"];
  const stringBrackets = [];
  const pairs = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  let stack = [];

  for (let i = 0; i < splitString.length; i++) {
    if (brackets.includes(splitString[i])) {
      stringBrackets.push(splitString[i]);
    }
  }

  for (let i = 0; i < stringBrackets.length; i++) {
    let current = stringBrackets[i];
    let firstElement;

    if (pairs[current] !== undefined) {
      firstElement = stack.length === 0 ? "#" : stack.pop();
      if (firstElement !== pairs[current]) {
        return false;
      }
    } else if (
      current === "|" &&
      stack.includes("|") &&
      stack[stack.length - 1] === "|"
    ) {
      stack.pop();
    } else {
      stack.push(current);
    }
  }
  return stack.length === 0;
}

console.log(balancedBrackets("[(])")); // false
console.log(balancedBrackets("foo(bar)baz")); //true
console.log(balancedBrackets("{{||[]||}}")); //true
console.log(
  balancedBrackets(
    "I am happy to take your donation; any amount will be greatly appreciated."
  )
); //true
console.log(
  balancedBrackets(
    "I (wa)n{t to buy a on}esie[…] b(u{[t] kno}w it) won’t suit me."
  )
); // true
console.log(
  balancedBrackets(
    "This is t(he la[st random sentence I will be writing |and| I am going to stop mid-sent]"
  )
); //false
console.log(balancedBrackets("([]{}|()|)")); // true

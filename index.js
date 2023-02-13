let myObj = {
  a: '"obj_a_val"',
  b: '"obj_b_val"'
}

function myFunc(argA, argB) {
  return `\t\tPassed Object values: a = ${this.a} | b = ${this.b}
  
  \t\tAnd Passed args: argB = ${argA}, argB = ${argB}\n\n\n`
}


// Pollyfills

// Apply Pollyfill
Function.prototype.myApply = function(scope, arrgs) {
  scope._this = this;
  // console.log('\t\tScope:', scope, '\n') // Uncomment this line to see the "scope"
  return scope._this(arrgs);
}


// Call Pollyfill
Function.prototype.myCall = function(scope, ...arrgs) {
  scope._this = this;
  // console.log('\t\tScope:', scope, '\n') // Uncomment this line to see the "scope"
  return scope._this(...arrgs);
}

// Bind Pollyfill
Function.prototype.myBind = function(scope, ...arrgs) {
  scope._this = this;
  // console.log('\t\tScope:', scope, '\n') // Uncomment this line to see the "scope"
  return () => { return scope._this(...arrgs) };
}

//  Calling Functions

// Apply - Input: [Arguments Passed as an Array] | Output: [Result of the Function]
console.log('Apply Gave -->\n')

// console.log(myFunc.apply(myObj, [123, 321])); // User This
console.log(myFunc.myApply(myObj, [123, 321])); // Or This, The output will be same


// Call - Input: [Arguments Passed Directly] | Output: [Result of the Function]
console.log('Call Gave -->\n')

// console.log(myFunc.call(myObj, 123, 321));
console.log(myFunc.myCall(myObj, 123, 321));

// Bind - Input: [Arguments Passed Directly] | Output: [returns a Function]
console.log('Bind Gave -->\n')

// const bindExec = myFunc.bind(myObj, 123, 321);
const bindExec = myFunc.myBind(myObj, 123, 321);
console.log(bindExec());
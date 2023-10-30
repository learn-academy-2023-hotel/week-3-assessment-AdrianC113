// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Prompt: Create a function that takes in a number (greater than 2) and returns an array containing the Fibonacci sequence. The length of the array is determined by the argument of the function.

// a) Create a test with expect statements for each of the variables provided.

describe('fibonacciSequence', () => {
  it('takes in a number (greater than 2) and returns an array containing the Fibonacci sequence.', () => {
   const fibonacciLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]
const fibonacciLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55] 
expect(fibonacciSequence(fibonacciLength1)).toEqual([1, 1, 2, 3, 5, 8])
expect(fibonacciSequence(fibonacciLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
})

// ReferenceError: fibonnaciSequence is not defined

// b) Create the function that makes the test pass.

// Pseudo code:

// input: Number greater than 2
// output: Array containing the Fibonacci sequence with a length dependent on the argument of the function
function fibonacciSequence (number) {
  if (number > 2) {
      const fibonacciArray = [1, 1]
      let arrayIndex = number-1 // max index in the final array is equal to the number -1 
      // Need a for loop that runs until the condition of i < arrayIndex is met.
      for (i=1; i < arrayIndex; i++) { 
        // Use .push to add the sum of the array value in the index of i and the array value in the previous index, which is i - 1, and then adding that sum to the fibonacci array
          fibonacciArray.push(fibonacciArray[i-1] + fibonacciArray[i])
      }
      return fibonacciArray
  } else {
    return "Enter a number greater than 2"
  }
}


// --------------------2) For the following prompt, use ChatGPT or an equivalent AI tool to help you solve the problem. The prompt will require the use of a JavaScript method called Object.values()
// Prompt: Create a function that takes in an object and returns an array of the object's values sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

describe('leastGreatest', () => {
  it('takes in an object and returns an array of the objects values sorted from least to greatest.', () => {
const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}
// Expected output: [15, 15, 20, 30, 30, 60, 90]
const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}
// Expected output: [10, 15, 20, 45, 60, 65, 100]
expect(leastGreatest(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
expect(leastGreatest(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
  })
})

// ReferenceError: leastGreatest is not defined

// b) Create the function that makes the test pass.

// Pseudo code:

// input: Takes in an object
// output: Array of the objects values sorted from least to greatest.
function leastGreatest(obj) {
  // Extract values from the object
  const values = Object.values(obj);
  // Sort the values in ascending order
  values.sort((a, b) => a - b);
  return values;
}

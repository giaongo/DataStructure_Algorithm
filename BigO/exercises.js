/* Exercise 1 ------------------*/
function funChallenge(input) {
    let a = 10; // O(1)
    a = 50 + 3; // O(1)
  
    for (let i = 0; i < input.length; i++) { // O(n)
      anotherFunction(); // O(n)
      let stranger = true; // O(n)
      a++; // O(n)
    }
    return a; // O(1)
  }

  // Big O(3 + 4n)

/* Exercise 2 -------------------*/

// What is the Big O of the below function? (Hint, you may want to go line by line)
function anotherFunChallenge(input) {
  let a = 5; // O(1)
  let b = 10; // O(1)
  let c = 50; // O(1)
  for (let i = 0; i < input; i++) {
    let x = i + 1; // O(n)
    let y = i + 2; // O(n)
    let z = i + 3; // O(n)

  }
  for (let j = 0; j < input; j++) {
    let p = j * 2; // O(n)
    let q = j * 2; // O(n) 
  }
  let whoAmI = "I don't know"; // O(1)
}
// Big O (4+5n)

/* Exercise 3 -------------------*/

const boxes = [1,2,3,4,5]
// Log pairs of the array
/* Log steps:
- Loop through each element
    - loop through each element again
        - combine the value at first loop with second loop

for (let i = 0)
    for (let j = 0)
      console.log(boxes[i],boxes[j])
*/
function printPair(boxes) {
  for (let i = 0; i < boxes.length; i++) { // O(n)
    for (let j = 0; j < boxes.length; j++) {
      console.log(boxes[i],boxes[j]) // O(n)
    }
  }
}
// printPair(boxes)

// Big O is O(n^2) -> Quadratic time

/* Exercise 4 -------------------*/
//#5 Space complexity O(1)
function boooo(n) {
  for (let i = 0; i < n; i++) {
    console.log("booooo");
  }
}

// boooo([1,2,3,4,5]) // space complexity: O(1)

function arrayOfHiNTimes(n) {
  var hiArray = [];
  for (let i = 0; i < n; i++) {
    hiArray[i] = "hi";
  }
  return hiArray;
}

// arrayOfHiNTimes(6); // space complexity: O[n]


/* Exercise 5 -------------------*/
// Find 1st, Find Nth
const array = ["hi", "my", "teddy"]
// array[0] // O(1)
//barray[array.length-1] // O(1)

array.forEach(value => {
  console.log("value is ", value)
})
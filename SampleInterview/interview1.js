/* Give 2 arrays , create a function if two arrays have anything in common
const array1 = ["a", "b", "c", "d"]
const array2 = ["z", "y", "i"]
-> return false

const array3 = ["a", "b", "c", "x"]
const array4 = ["z", "y", "x"]
-> return true
*/

// 2 parameters - arrays - no size limit
// return true or false 

/* turn array1 to an object -> {
    "a": true, 
    "b": true, 
    "c": true, 
    "x": true
}
    for (let value in array2)
        value === object.properties => true
    return false

*/

function findSimilarity(arr1, arr2) {
    const modelObj = {}
    // loop through the first arr and check if value exists in modelObj. If not -> add object property
    for (value of arr1) {
        if(!modelObj[value]) {
            modelObj[value] = true // O(a)
        }
    }

    // loop through the second arr and check if value of second arr === object.property
    for (data of arr2) {
        if(modelObj[data]) { // O(b)
            return true
        }
    }
    return false
}

// Big O is O(a + b) -> space complexity will be O(a) : a is array 
// 2 nested loop -> space complexity will be O(1)
// test
const array5 = ["a", "b", "c", "x"]
const array6 = ["z", "y", "x"]
/* const result1 = findSimilarity(array5, array6)
console.log(result1) */

function findSimilarity2(arr1, arr2) {
    return arr1.some((item) => arr2.includes(item))
}

const result1 = findSimilarity2(array5, array6)
console.log(result1)
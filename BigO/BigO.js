// Linear Operation - O(n) ------------------
colorArray = ["black", "pink"]

function findColor(arr) {
    for(let i=0; i < arr.length; i++) {
        if(arr[i] == "pink") {
            console.log("Found pink!!!")
        }
    }

}

findColor(colorArray)

// Constant - O(1) ---------------------------
function findColor(arr) {
    console.log("Okay")

}

// Simplify: Remove constant -> O(2n) -> O(n) -----------------
function findColor(arr) {
    for(let i=0; i < arr.length; i++) {
        if(arr[i] == "pink") {
            console.log("Found pink!!!") // O(n)
        }
    }
    for(let i=0; i < arr.length; i++) {
        if(arr[i] == "pink") {
            console.log("Found pink!!!") // O(n)
        }
    }
}

// Simplify: Different inputs -> O(a+b)

function findColor(arr1,arr2) {
    for(let i=0; i < arr1.length; i++) {
        if(arr1[i] == "pink") {
            console.log("Found pink!!!") // O(a)
        }
    }
    for(let i=0; i < arr2.length; i++) {
        if(arr2[i] == "pink") {
            console.log("Found pink!!!") // O(b)
        }
    }
}

// O(!n): Loop for every element-----------------
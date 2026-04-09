//abstracting looping:
/*
Complexities: 
1.Lexical scoping: IE accessing the respective element in the instance of the loop.
2.Closure: IE the loop variable is being accessed by the function passed as an argument to the loop function, which is a closure.
3. Higher order functions: IE the loop function is a higher order function because it takes a function as an argument and returns a function.
4. Callback functions: IE the function passed as an argument to the loop function is a callback function because it is called back by the loop function.
5. Recursion: IE the loop function can be implemented recursively, but in this case we are using a for loop to implement it iteratively.

# The above complexities are implemented in "complexLoop" function. It takes an additional argument "condition" which is a function that returns a boolean value to determine when to stop the loop. It also takes an additional argument "increment" which is a function that increments the loop variable. This allows for more flexibility in the looping mechanism, as we can define our own stopping condition and incrementing logic.
*/

let array = [1,2,3,6,7,0,0,0,8,9,4,5];

function loop(count, action){
    for(let a = 0; a < count; a++ ){
        //console.log(a);
        action(a);
    }
}

function complexLoop(count, action, condition, increment){}


// Finding the maximum/minimum element:
function findMax(arr){
    let max = arr[0];
    for(let a = 1; a < arr.length; a++){
        if(arr[a] > max){
            max = arr[a];
        }
    }
    return max;
}

function findMin(arr){
    let min = arr[0];
    for(let a = 1; a < arr.length; a++){
        if(arr[a] < min){
            min = arr[a];
        }
    }
    return min;
}

// Reverse an array in place;
function reverseArray(arr){
    const newArr = [];
    for(let a = 0; arr.length > 0; a++){  // instead of a < arr.length, we check if arr.length > 0 because we are popping elements out of the array, so the length is changing.

        newArr.push(arr.pop());
        
    }
    return newArr;
}


//Move zeros to end;
function mvZeros(arr){
    //search, slice, shift;
    const newArr = [];
    let count = 0;
    const slice = [];
    for(let a = 0; a < arr.length; a++){
        if(arr[a]===0){
            count++;
            newArr.push(arr.slice(a+1));
            console.log("still slicing")
            console.log(newArr);
        }
    }
    for(let a = 0; a < count; a++){
        newArr.push(0);
    }
    return newArr;
}

// console.log(mvZeros(array).flat(Infinity));


// Remove duplicates in sorted array;
function deDuplicate(arr){
    const newArr = [];
    for(let a = 0; a < arr.length; a++){
        if(arr[a] === arr[a+1]){
            continue;
        }else{
            newArr.push(arr[a])
        }
    }
    return newArr.length;
}


// Linear search:
function lnSearch(arr, element){
    const found = [];
    for(let a = 0; a < arr.length; a++){
        if(arr[a] === element){
            found.push(arr[a]);
        }
    }
    if(found){
        return [...found];
    }else{
        return -1;
    }
}

//Binary search:
function bnSearch(arr, element){
    const left = 0;
    const right = arr.length-1;
    const mid = Math.floor((left + right)/2);
    for(let a = 0; a < a.length; a++){
        if(element === arr[mid]){
            return mid
        }else if(element > arr[mid]){
            left = mid;
            right = arr.length;
            mid = Math.floor((left + right)/2);
        }else{
            left = 0;
            right = mid;
            mid = Math.floor((left + right)/2);
        }
    }
}



//Flattening an array;
function flattenArray(arr, depth = 1) {
    return arr.reduce((acc, val) => {
        if (Array.isArray(val) && depth > 0) {
            acc.push(...flattenArray(val, depth - 1));
        } else {
            acc.push(val);
        }
        return acc;
    }, []);
}

// Usage
const nested = [[0, 0, 8, 9, 4, 5], [0, 8, 9, 4, 5], [8, 9, 4, 5]];
console.log(flattenArray(nested, Infinity));
// [0, 0, 8, 9, 4, 5, 0, 8, 9, 4, 5, 8, 9, 4, 5]   


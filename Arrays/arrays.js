//abstracting looping:
function loop(count, action){
    for(let a = 0; a < count; a++ ){
        //console.log(a);
        action(a);
    }
}

let array = [1,2,3,6,7,0,0,0,8,9,4,5];


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


//abstracting looping:
function loop(count, action){
    for(let a = 0; a < count; a++ ){
        action;
    }
}

// Reverse an array in place;
function reverseArray(arr){
    const newArr = [];
    for(let a = 0; a < arr.length; a++){
        newArr.push(arr.pop());
    }
    return newArr;
}


//Move zeros to end;
function mvZeros(arr){
    //search, slice, shift;
    const newArr = [];
    const count = 0;
    const slice = [];
    for(let a = 0; a < arr.length; a++){
        if(arr[a]===0){
            count++;
            newArr.push(arr.slice(a+1));
            console.log(newArr);
        }
    }
    for(let a = 0; a < count; a++){
        newArr.push(0);
    }
    return newArr;
}


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


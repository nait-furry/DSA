
function fibLoop(num){
    let n = [];
    n.push(0, 1);
    if(num <= 1){
        return n;
    }else{
        for(let i = n.length; i < num; i++){
            n.push(n[i-1] + n[i-2]);
        }
    }
    return n;
}

function fibRec(num){
    let n = [];
    n.push(0,1)
    if(num <= 1){
        return n;

    }else{
        return recur(n, num);
    }

    function recur(nm, num){
        console.log("Called successfull: " + "nm: " + nm + " num: " + num );
        if(nm.length >= num){
            console.log("returning: " + nm);
            return nm;
        }else{
            nm.push(nm[nm.length - 1] + nm[nm.length - 2])
            console.log("Proceding with recursion: " + "nm: " + nm + " num: " + num);
            return recur(nm, num);
        }
    }
}
// fibonacci(10);
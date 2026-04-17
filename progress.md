- This file is for keeping tabs on detours and added/reduced/changed complexities within the DSA project:
# arrays.js:
1. Abstracting looping:
- Lexical scoping: IE accessing the respective element in the instance of the loop
- Closure: IE the loop variable is being accessed by the function passed as an argument to the loop function, which is a closure.
- Higher order functions: IE the loop function is a higher order function because it takes a function as an argument and returns a function.
- Callback functions: IE the function passed as an argument to the loop function is a callback function because it is called back by the loop function
- Recursion: IE the loop function can be implemented recursively, but in this case we are using a for loop to implement it iteratively.


2. Bubble sort:
- One-liner swapping via **destructuring assignment** instead of temporary variables: Swapping, Rotating, Reodering
- 
- 


better:
## Comparing the Two Bubble Sort Implementations

```python
my_array = [7, 3, 9, 12, 11]

n = len(my_array)
for i in range(n-1):
    swapped = False
    for j in range(n-i-1):
        if my_array[j] > my_array[j+1]:
            my_array[j], my_array[j+1] = my_array[j+1], my_array[j]
            swapped = True
    if not swapped:
        break

print("Sorted array:", my_array)
```

```js
function bubbleSort(array){
    for(let a = 1; a <= array.length; a++){
        for(let b = 1; b <= array.length; b++){
            if(array[b] < array[b-1]){
                let arr  = array[b-1];
                array[b-1] = array[b];
                array[b] = arr;
                console.log("nth: " + b + ": " + array + " a: " + a);
            }else{
                continue;
            }
        }
       if(a == array.length){
            return array;
       }
    }

}
```

--- Comparison:

### 1. Early Exit Optimization
- **Python ✅** — Uses a `swapped` flag. If no swaps occur in a pass, it `break`s early. This makes best-case performance **O(n)**.
- **JavaScript ❌** — Always runs all `a` iterations regardless of whether the array is already sorted. Best-case is still **O(n²)**.

---

### 2. Shrinking the Inner Loop
- **Python ✅** — Inner loop runs `range(n-i-1)`, meaning each pass is **one element shorter** since the largest value is already bubbled to the end.
- **JavaScript ❌** — Inner loop always runs the full `array.length`, **redundantly comparing already-sorted elements** at the end.

---

### 3. Out-of-Bounds Risk
- **Python ✅** — Safe indexing.
- **JavaScript ⚠️** — The inner loop goes up to `b <= array.length`, but valid indices are `0` to `array.length - 1`. When `b === array.length`, `array[b]` is `undefined`, which can cause **incorrect comparisons or bugs**.

---

### 4. Return Condition
- **Python** — Prints after the loop naturally ends.
- **JavaScript** — Only returns when `a == array.length`, but since the loop condition is `a <= array.length`, this works — though it's an unusual pattern.

---

### Summary Table

| Feature | Python | JavaScript |
|---|---|---|
| Early exit | ✅ Yes | ❌ No |
| Shrinking inner loop | ✅ Yes | ❌ No |
| Out-of-bounds safe | ✅ Yes | ⚠️ Risk |
| Time complexity (best) | O(n) | O(n²) |
| Time complexity (worst) | O(n²) | O(n²) |

The JavaScript version works in most cases but is less efficient and has an off-by-one risk in the inner loop.



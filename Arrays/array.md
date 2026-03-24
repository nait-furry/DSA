# 1. Representation in memory:
. js abstracts memory so **NO**:
    Primitive Types: numbers, boolean, null, undefined, bigint, symbol.
. Arrays, alongside Objects, and functions are *Reference types*:
    - Stored in heap memory;
    - Variables hold references(memory addresses);


# 2. Traversal, Insertion, Deletion

### Traversal

- For loop;
Time: **O(n)**
Abstracting looping involves using arrow functions:
  - Most looping involves using an updatable counter ie:
    ```js
      let a = 0;
      console.log(array[a]);
      a++;
      // Becoming:
      function loop(count, action){
        for(a<count)...{ // Just being lazy... Figure it out
          action(a)
        }
      }
      looop(5, (a)=>{console.log(array[a])})
    
    ```
  - 
  - 

---

### Insertion

At the end:

```js
arr.push(x); // O(1) amortized
```

At the beginning:

```js
arr.unshift(x); // O(n)
```

In the middle:

```js
arr.splice(index, 0, x); // O(n)
```

---

### Deletion

End:

```js
arr.pop(); // O(1)
```

Beginning:

```js
arr.shift(); // O(n)
```

Middle:

```js
arr.splice(index, 1); // O(n)
```
---


# 3. Searching Algorithms

---

### Linear Search

Scan each element sequentially.

```js
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}
```

Time complexity:

* Best: O(1)
* Worst: O(n)

Works on **unsorted arrays**

---

### Binary Search

Requires **sorted array**

Divide and conquer.

```js
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}
```

Time complexity:

* **O(log n)**

Each step halves the search space.

---

# 4. Sorting Algorithms

---

###  Bubble Sort

Repeatedly swap adjacent elements if out of order.

```js
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
        // The swapping... unbeleavable MAN !: heap vs stack, array destructuring, 
      }
    }
  }
  return arr;
}
```

Time:

* Worst: O(n²)
* Best (optimized): O(n)

Stable and In-place

---

### Selection Sort

Select smallest element and swap.

```js
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;

    for (let j = i+1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
}
```

Time: O(n²)
Not Stable, but In-place

---

### Insertion Sort

Build sorted portion gradually.

```js
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j+1] = arr[j];
      j--;
    }

    arr[j+1] = key;
  }
  return arr;
}
```

Time:

* Worst: O(n²)
* Best (nearly sorted): O(n)

Stable and In-place

---

### Merge Sort

Divide → Sort → Merge

```js
function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  let result = [];
  let i = 0, j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
}
```

Time: **O(n log n)**
Stable
Space: O(n)

---

### Quick Sort

Divide using pivot.

```js
function quickSort(arr) {
  if (arr.length <= 1) return arr;

  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}
```

Time:

* Average: O(n log n)
* Worst: O(n²)

In-place versions exist.

---

# 5. Sliding Window (Optimization Technique)

Used when:

* Working with **contiguous subarrays**
* Want to reduce O(n²) → O(n)

---

### Example: Maximum sum of subarray of size k

Brute force: O(n²)

Optimized:

```js
function maxSubarraySum(arr, k) {
  let windowSum = 0;

  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }

  let maxSum = windowSum;

  for (let i = k; i < arr.length; i++) {
    windowSum += arr[i] - arr[i - k];
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}
```

Time: O(n)

---

# 6. Prefix Sums

Used to compute range sums in O(1).

### Step 1: Build prefix array

```js
function buildPrefix(arr) {
  let prefix = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    prefix[i] = prefix[i - 1] + arr[i];
  }

  return prefix;
}
```

### Step 2: Range Sum Query

```js
function rangeSum(prefix, left, right) {
  if (left === 0) return prefix[right];
  return prefix[right] - prefix[left - 1];
}
```

Preprocessing: O(n)
Query: O(1)

---

# Summary Table

| Algorithm      | Time        | Space    | Stable |
| -------------- | ----------- | -------- | ------ |
| Linear Search  | O(n)        | O(1)     | —      |
| Binary Search  | O(log n)    | O(1)     | —      |
| Bubble Sort    | O(n²)       | O(1)     | Yes    |
| Selection Sort | O(n²)       | O(1)     | No     |
| Insertion Sort | O(n²)       | O(1)     | Yes    |
| Merge Sort     | O(n log n)  | O(n)     | Yes    |
| Quick Sort     | O(n log n)* | O(log n) | No     |

---


# **Problem set** 

* 🟢 Easy
* 🟡 Medium
* 🔴 Hard

---

### 🟢 1. Reverse an Array (In-Place)

**Problem:**
Reverse an array without using extra space.

Example:

```
Input:  [1,2,3,4]
Output: [4,3,2,1]
```

Constraint: O(n) time, O(1) space.

---

### 🟢 2. Move Zeros to End

Move all `0`s to the end while keeping order of non-zero elements.

```
Input:  [0,1,0,3,12]
Output: [1,3,12,0,0]
```

Hint: Two-pointer technique.

---

### 🟢 3. Remove Duplicates (Sorted Array)

Remove duplicates in-place from sorted array and return new length.

```
Input:  [1,1,2,2,3]
Output: [1,2,3,_ ,_]
Return: 3
```

---

# 2️⃣ Traversal / Searching

---

### 🟢 4. Implement Linear Search

Return index of target or -1.

---

### 🟢 5. Implement Binary Search

Input array is sorted.

Return index of target.

Edge cases:

* target not present
* array length 0
* one element

---

### 🟡 6. First Occurrence Using Binary Search

Array may contain duplicates.

```
Input: [1,2,2,2,3]
Target: 2
Output: 1
```

You must modify binary search logic.

---

### 🟡 7. Find Peak Element

A peak is element greater than neighbors.

```
Input: [1,2,3,1]
Output: 2 (index of 3)
```

Can be solved in O(log n).

---

# 3️⃣ Sorting (Implementation & Understanding)

---

### 🟢 8. Implement Bubble Sort (Optimized)

Add early stopping if no swaps occur.

---

### 🟢 9. Implement Insertion Sort

Test on nearly sorted array and observe performance.

---

### 🟡 10. Implement Merge Sort From Scratch

No built-in `.sort()`.

Then answer:

* Why is it O(n log n)?
* Why does it need extra space?

---

### 🟡 11. Quick Sort (In-Place Version)

Use partitioning.

Try:

* Last element pivot
* Random pivot

Observe worst-case scenario.

---

### 🔴 12. Sort Colors (Dutch National Flag)

Array contains only:

```
0, 1, 2
```

Sort in one pass.

```
Input:  [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
```

Constraint: O(n), O(1)

---

# 4️⃣ Sliding Window

---

### 🟢 13. Maximum Sum Subarray of Size K

Already discussed — implement from scratch.

---

### 🟡 14. Longest Substring Without Repeating Characters

```
Input: "abcabcbb"
Output: 3 ("abc")
```

Hint: Use sliding window + Set.

---

### 🟡 15. Smallest Subarray With Sum ≥ Target

```
Input: [2,3,1,2,4,3], target = 7
Output: 2  (subarray [4,3])
```

Variable window size.

---

### 🔴 16. Maximum Number of Vowels in Substring of Length K

Sliding window with frequency tracking.

---

# 5️⃣ Prefix Sums

---

### 🟢 17. Range Sum Query

Given array and multiple queries `[L, R]`, return sum.

Must preprocess using prefix sum.

---

### 🟡 18. Subarray Sum Equals K

Return number of subarrays whose sum = k.

```
Input: [1,1,1], k=2
Output: 2
```

Hint: prefix sum + hashmap

---

### 🔴 19. Product of Array Except Self

```
Input:  [1,2,3,4]
Output: [24,12,8,6]
```

Constraint:

* No division
* O(n)
* O(1) extra space (output array not counted)

---

# 6️⃣ Mixed Concepts (Interview Style)

---

### 🟡 20. Two Sum

```
Input: [2,7,11,15], target=9
Output: [0,1]
```

Solve:

* Brute force
* Using hash map

---

### 🟡 21. Container With Most Water

Two pointers problem.

---

### 🔴 22. Trapping Rain Water

Classic optimization problem.

---

# 7️⃣ Conceptual Questions (Very Important)

Answer these in writing:

1. Why is binary search O(log n)?
2. Why does merge sort always perform O(n log n)?
3. Why can quicksort degrade to O(n²)?
4. When is insertion sort better than merge sort?
5. Why does sliding window reduce O(n²) to O(n)?

---

# Recommended Practice Order

Start here:

1 → 2 → 3 → 4 → 5
Then:
13 → 14 → 15
Then:
10 → 11
Then:
18 → 19
Then hard problems.

---

If you want, I can now:

* Solve one with you step-by-step
* Give hints only
* Give full solutions
* Or simulate a mock interview

What’s your current level (beginner / intermediate / preparing for interviews)?



# Key words: 
hash maaps, time complexity{access, insert/delete at end, insert/delete at beginning, search, }, amortized, Destructuring assignment, Writing tests, Testing for complexity of respective algorithm,  


Application:
Managing large amounts of data, such as in a social network or a search engine.
Scheduling tasks, to decide which task a computer should do first.
Planning routes, like in a GPS system to find the shortest path from A to B.
Optimizing processes, such as arranging tasks so they can be completed as quickly as possible.
Solving complex problems: From finding the best way to pack a truck to making a computer 'learn' from data.
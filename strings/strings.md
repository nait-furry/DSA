### String Manipulation in JavaScript

#### String manipulation:
- Using built-in methods: `split()`, `replace()`, `toLowerCase()`, `slice()`, `substring()`, and `substr()`.
- Handling immutability: operations return new strings.
- Cleaning input (removing spaces/punctuation) for comparison tasks.
- Optimizing performance by avoiding repeated string concatenation in loops.
- Extracting parts of strings.

### Palindromes

A palindrome reads the same forwards and backwards. To check this in JavaScript:

#### Palindrome criteria:
- Phrase reads the same forwards and backwards.
- Punctuation, spaces, and capitalization are typically ignored.
- **Example:** "A man a plan a canal Panama" → "amanaplanacanalpanama" is the same reversed

- **Simple method**: Clean the string (remove non-alphanumeric chars, convert to lowercase), reverse it, and compare.
  ```js
  function isPalindrome(str) {
    /*
    const cleaned = str.toLowerCase().replace('', '');
    return cleaned === cleaned.split('').reverse().join('');
    */
  }
  ```
- **Efficient loop**: Compare characters from both ends moving inward.
  ```js
  function isPalindrome(str) {
    /*
    const cleaned = str.toLowerCase().replace('', '');
    for (let i = 0; i < cleaned.length / 2; i++) {
      if (cleaned[i] !== cleaned[cleaned.length - 1 - i]) return false;
    }
    return true;
    */
  }
  ```

### Anagrams

Two strings are anagrams if they contain the same characters in the same frequency.

#### Anagrams criteria:
- Two strings contain the exact same characters.
- Each character appears the same number of times in both strings.
- The order of characters can differ.
- **Example:** "listen" and "silent" have identical character counts.

- **Sorting method**:
  ```js
  function areAnagrams(a, b) {
    /*
    const clean = str => str.toLowerCase().replace('', '').split('').sort().join('');
    return clean(a) === clean(b);
    */
  }
  ```
- **Character count method**: Use an object to count character frequencies in one string and decrement while iterating through the second.

### Pattern Searching

Find occurrences of a substring (pattern) within a string.

#### Pattern searching:
- Find all occurrences of a smaller string (pattern) within a larger string (text).
- The match must be exact and contiguous.
- Efficient algorithms (e.g., KMP, Rabin-Karp) avoid unnecessary comparisons.

- **Built-in**: Use `indexOf()` or `includes()`.
- **Naive algorithm**: Loop through the string and check for pattern match at each position.
- **Efficient algorithms**: Implement regex for complex patterns.

### Substrings and Subsequences

#### Substrings criteria:
- Characters are taken from the original string in a contiguous sequence.
- The order of characters is preserved.
- **Example:** In "abc", "ab" and "bc" are substrings; "ac" is not.

#### Subsequence criteria:
- Characters are taken from the original string in order, but not necessarily contiguous.
- Characters can be skipped, but their relative order must remain unchanged.
- **Example:** In "abc", "ac" is a valid subsequence.

- **Substrings** are contiguous sequences within a string. Use `slice()`, `substring()`, or `substr()` to extract them.
- **Subsequences** are sequences derived by deleting some characters without disturbing the order. To find all palindromic subsequences:
  ```js
  function getAllPalindromicSubsequences(str) {
    /*
    const result = new Set();
    const isPal = s => s === s.split('').reverse().join('');
    for (let i = 0; i < str.length; i++) {
      for (let j = i + 1; j <= str.length; j++) {
        const sub = str.slice(i, j);
        if (isPal(sub)) result.add(sub);
      }
    }
    return Array.from(result);
    */
  }
  ```

let sent = "  Hello, JavaScript World!  ";   
// Removes whitespace from both ends
sent.trim()

// Changes case
sent.toUpperCase()  
sent.toLowerCase()

// Exracting substrings
sent.slice(start, end-1)
substring(start, end-1)

// Searching and checking
sent.includes("orld")
sent.startsWith("Helo")
sent.endsWith("ld!")
sent.charAt("index")

// Replacing Content
sent.replace("old", "new") // Replaces first occurrence
sent.replace("JavaScript", "JS") 
replaceAll("old", "new") // Replaces all occurrences
"Hi Hi Hi".replaceAll("Hi", "Hey")

// Splitting and Joining
split(separator) // Splits string into array
sent.trim().split("...") 
sent.join("...")

// Padding and Repeating
padStart(length, padString) // Pads from start
"5".padStart(3, "0")
repeat(count) // Repeats string
"yo".repeat(3)


// Application: 

let input = "  jaNe doe  ";

// Trim and format
let clean = input.trim(); // "jaNe doe"
let names = clean.split(" "); // ["jaNe", "doe"]

// Capitalize each name
let formatted = names.map(n => n.charAt(0).toUpperCase() + n.slice(1).toLowerCase()).join(" ");
// "Jane Doe"

// Extract initials
let initials = names.map(n => n.charAt(0).toUpperCase()).join(""); // "JD"

// Generate username
let username = (names[0].toLowerCase() + names[1].charAt(0).toLowerCase() + "123").padEnd(10, "x");
// "janed123xx"

console.log({ formatted, initials, username });   


// Palindrome Check
function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleaned === cleaned.split('').reverse().join('');
}
isPalindrome("A man, a plan, a canal. Panama"); // true

// Anagram Detection
function areAnagrams(str1, str2) {
  const normalize = s => s.toLowerCase().replace(/[^a-z0-9]/g, '').split('').sort().join('');
  return normalize(str1) === normalize(str2);
}
areAnagrams("listen", "silent"); // true

// Pattern Searching
function findAllOccurrences(text, pattern) {
  const indices = [];
  let index = text.indexOf(pattern);
  while (index !== -1) {
    indices.push(index);
    index = text.indexOf(pattern, index + 1);
  }
  return indices;
}
findAllOccurrences("abababa", "aba"); // [0, 2, 4]

//Substrings
const str = "hello";
str.slice(1, 4); // "ell" - characters from index 1 to 3

//Subsequences
function getAllSubsequences(str) {
  if (str.length === 0) return [''];
  const rest = getAllSubsequences(str.slice(1));
  return [...rest, ...rest.map(s => str + s)];
}
// "ab" → ["", "b", "a", "ab"]


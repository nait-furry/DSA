- This file is for keeping tabs on detours and added/reduced/changed complexities within the DSA project:
# arrays.js:
1. Abstracting looping:
- Greatly Increased the complexity of a simple looping program:
    * Lexical scoping: IE accessing the respective element in the instance of the loop
    * Closure: IE the loop variable is being accessed by the function passed as an argument to the loop function, which is a closure.
    * Higher order functions: IE the loop function is a higher order function because it takes a function as an argument and returns a function.
    * Callback functions: IE the function passed as an argument to the loop function is a callback function because it is called back by the loop function
    * Recursion: IE the loop function can be implemented recursively, but in this case we are using a for loop to implement it iteratively.

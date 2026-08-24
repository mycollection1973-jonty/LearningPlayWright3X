# LearningPlayWright3X

A structured learning journey through JavaScript fundamentals and Playwright automation.

## Chapters

### 01_chapter_JS
JavaScript basics — Hello World program and getting started.

### 02_chapter_JS
Variables and the `let` keyword — understanding scoping and variable declarations.

### 03_chapter_JS_Identifier
Identifiers, naming rules, comments, and key concepts around JS identifiers.

### 04_chapter_JS_Literal
Literals in JavaScript — numbers, strings, null, undefined, and related concepts.

### 05_chapter_Operator
Operators in JavaScript — covers:
- Data types
- Arithmetic, assignment, and comparison operators
- Logical operators
- Confusing comparisons (type coercion)
- Increment & decrement operators (prefix/postfix)
- Nullish coalescing operator (`??`)
- IQ notes on operator concepts

### 06_Statement
Statements and conditionals in JavaScript — covers:
- Conditional logic with multiple conditions
- IQ notes on statement concepts

### Practice_Code
Practice coding exercises — includes:
- `01_187.js` — Number-based practice problem
- `02_Triangle_Classifier.js` — Triangle classification (equilateral/isoceles/scalene)
- `03_Hackerrank_IfElse.js` — HackerRank if-else conditionals
- `04_Hackerrank_Switch.js` — HackerRank switch statement practice
- `05_FizzBuzz.js` — FizzBuzz classic problem
- `06_Loop.js` — Loop-based practice exercises
- `07_MaxNumber_Array.js` — Find the maximum number in an array
- `08_Frequency_Array.js` — Frequency of each element in an array
- `09_Reverse_Array.js` — Reverse array elements
- `10_Pallindrome.js` — Palindrome check
- `11_PrimeNum.js` — Prime number checker
- `12_VowelConst_Array.js` — Vowel and consonant counter
- `13_Pyramid.js` — Pyramid star pattern
- `14_LeftTriangle.js` — Left-aligned triangle pattern
- `15_RightTriangle.js` — Right-aligned triangle pattern
- `16_LeapYear.js` — Leap year checker
- `17_Duplicate_Array.js` — Find duplicate elements in an array
- `18_Smallest_Array.js` — Find the smallest number in an array
- `19_Sum_Array.js` — Sum of array elements

### Test_208
Practice questions (Test 208) — includes:
- `q1_EvenOdd.js` — Even or odd number check
- `q2_LargestNumber.js` — Largest of 3 numbers
- `q3_ReverseString.js` — Reverse a string
- `q4_PallindromeString.js` — Palindrome string check
- `q5_Factorial.js` — Factorial of a number
- `q6_Fibonacci.js` — Fibonacci series up to N terms
- `q7_PrimeNumber.js` — Prime number check
- `q8_CountVowels.js` — Count vowels in a string
- `q9_LargestNumberArray.js` — Largest number in an array
- `q10_RemoveDuplicateArray.js` — Remove duplicate values from an array using nested loops

### IQ_Notes
Conceptual notes and reference material:
- Identifier rules
- Keyword notes
- Windows commands
- Source code / bytecode / binary concepts
- Array functions reference with examples

### 07_chapter_Switch
Switch statements in JavaScript — covers:
- Basic switch cases
- Real-world API testing with switch
- Switch grouping
- IQ notes on switch concepts

### 08_chapter_UserInputs
User input handling in JavaScript — covers:
- Basic JS input with `prompt()`
- Node.js UI with `readline`
- `readline.prompt()` patterns
- File system (`fs`) concepts and operations

### 09_chapter_Loops
Loop constructs in JavaScript — covers:
- Basic loops (`for`, `while`, `do-while`)
- Increment patterns
- Nested loops
- Loop comparisons and use cases

### MCQ
Multiple choice questions for self-assessment:
- `Array_MCQ.md` — Array-related MCQ for JavaScript fundamentals

### 10_chapter_Arrays
Arrays in JavaScript — covers:
- Array creation and access
- Adding and removing elements
- Searching arrays
- Array iteration
- Array transformation (`map`, `filter`, `reduce`)
- Sorting arrays
- Slicing and concatenation
- Array checking methods
- Copying arrays (shallow/deep)
- Destructuring arrays
- Real-world array usage
- IQ notes on array concepts

### 11_chapter_Functions
Functions in JavaScript — covers:
- Basic function definitions and parameters/arguments
- Function types (basic, function expressions)
- Template literals
- Arrow functions
- Immediately Invoked Function Expressions (IIFE)
- Real-world function usage
- Spread operator with functions (rest parameters)
- Return statements and returned values (undefined, arrays)
- `var` vs `let` vs `const` — scoping (function vs block scope)
- Hoisting — `var`, `let`, `const`, and function hoisting
- Temporal Dead Zone (TDZ)
- IQ notes on scoping and hoisting
- Hoisting & TDZ complete reference notes
- IQ notes on function expressions (not hoisted)

### 12_chapter_Fn_Closure
Closures in JavaScript — covers:
- Scope inside functions (global vs local)
- Returning inner functions
- Closures remembering state (counter)
- Real-world closures (retry tracker, rate limiter)

### 13_chapter_String
Strings in JavaScript — covers:
- String creation (single/double quotes, template literals)
- String conversion (`String()`) and multiline strings
- String properties and access (`length`, indexing, `at()`, `charAt()`, `charCodeAt()`)
- String searching (`includes`, `startsWith`, `endsWith`, `indexOf`, `lastIndexOf`)
- String extraction (`slice`, `substring`)
- Case conversion, trimming, `replace`/`replaceAll`, concatenation
- Splitting and joining strings, `parseInt`/`parseFloat` conversion
- String immutability

### 14_chapter_Object
Objects in JavaScript — covers:
- Object creation and JSON-style syntax
- Accessing, adding, and modifying properties
- Reference vs value semantics (call by reference / call by value)
- Objects and references (assignment copies reference, not value)
- Object methods (`this`)
- Config-style object usage (adding, updating, deleting properties)

### 15_Multi_Dimensions_Array
Multi-dimensional arrays in JavaScript — covers:
- 1D and 2D arrays (matrix / grid)
- Accessing and modifying elements (`grid[i][j]`)
- Iterating 2D arrays (nested `for`, `for...of`, `forEach`)
- Array methods on 2D arrays (`map` + `reduce`)
- Star pattern programs (right, left, pyramid)

### 16_Callback
Callbacks in JavaScript — covers:
- Callback basics (named, anonymous, arrow functions)
- Sync vs async callbacks (`forEach`, `setTimeout`)
- Callback hell (nested callbacks)
- Real-world QA scenario (E2E login flow)
- Returning values via callbacks
- Pyramid of doom / DOM step sequencing

### 17_Promise
Promises in JavaScript — covers:
- Promise basics (`resolve` / `reject`)
- `.then()` and `.catch()` handling
- `.finally()` — always executed
- Real-world API and E2E login flows
- `Promise.all`, `Promise.race`, `Promise.allSettled`
- IQ questions and interview-style examples

### 18_Async_Await
Async/await in JavaScript — covers:
- `18_01_Example.js` — Async/await basics
- `18_02_BetterWay.js` — The better way to write asynchronous code (vs promise chains)
- `18_03_Async_Await.js` — Async functions returning promises and `await` reading resolved values
- `18_04_Example_Specs.ts` — Playwright test example using `await` (commented reference)
- `18_05_TryCatch.js` — Error handling with `try`/`catch`/`finally` (vs `.catch()`)
- `18_06_Sequence_Execution.js` — Sequential execution for dependent steps
- `18_07_Parallel_Execution.js` — Parallel execution with `Promise.all`
- `18_08_API_Flaky.js` — Retry pattern for flaky APIs (real QA scenario)
- `18_09_IQ.js` — IQ and interview-style questions on async/await

### Aysnc_Await_Notes
Interactive HTML reference pages (dark theme, runnable "Run example" buttons) — covers:
- `callback_research.html` — The callback pattern: sync vs async callbacks, error-first style, callback hell, and the evolution to promises
- `async_keyword_research.html` — The `async` keyword: syntax forms, always-returns-a-promise rule, execution order, hoisting
- `await_keyword_research.html` — The `await` operator: unwrapping promises, microtask control flow, rejection handling, top-level await
- `new_promise_research.html` — The `Promise()` constructor: executor rules, resolve/reject, promise states, wrapping callback APIs
- `promise_all_research.html` — `Promise.all()`: batching, input-order results, fail-fast behavior, parallel execution patterns
- `promise_race_research.html` — `Promise.race()`: first-settled-wins, request timeouts, race vs any

### PlayWright
Playwright and automation-related material:
- VWO PRD document
- Selenium framework references (Gen_AI)

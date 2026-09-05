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

### 18_Aysnc_Await_Notes
Interactive HTML reference pages (dark theme, runnable "Run example" buttons) — covers:
- `callback_research.html` — The callback pattern: sync vs async callbacks, error-first style, callback hell, and the evolution to promises
- `async_keyword_research.html` — The `async` keyword: syntax forms, always-returns-a-promise rule, execution order, hoisting, plus a full Playwright examples section (test hooks, API testing, `expect.poll`, parallel waits, retry wrappers, custom fixtures)
- `await_keyword_research.html` — The `await` operator: unwrapping promises, microtask control flow, rejection handling, top-level await
- `new_promise_research.html` — The `Promise()` constructor: executor rules, resolve/reject, promise states, wrapping callback APIs
- `promise_all_research.html` — `Promise.all()`: batching, input-order results, fail-fast behavior, parallel execution patterns
- `promise_race_research.html` — `Promise.race()`: first-settled-wins, request timeouts, race vs any

### 19_Export_Import
Export/import (ES modules) in JavaScript — covers:
- `19_01.js` — Importing named exports (`BASE_URL`, `formatUpperCaseString`) from a test util module
- `19_02_testutil.js` — A util module: `export let BASE_URL` and `export function formatUpperCaseString` (plus a non-exported local variable)
- `19_03.js` — Import aliases (`as`) and importing from multiple modules with `BASE_URL` name collisions
- `19_04_utils.js` — API test util module: `BASE_URL` and test-name formatters (`TC_` prefix), with a commented Playwright `LoginPage` class reference
- `19_05.js` — Importing a logger util: named import (`logBetter`) vs commented default import
- `logs/19_06_logger.js` — Logger module: default export (`log`) and named export (`logBetter`) with log formatting

### 20_Class_Object_OOPS
Classes, objects, and OOP concepts in JavaScript — organized into sub-topics:
- **01_Class_Object** — Class basics, constructors, and object creation:
  - `20_01_Example.js` — Class basics: `class Person` with private attributes (`#name`, `#age`), behaviours (methods), and creating objects via `new Person()`
  - `20_02_Example.js` — Constructors: parameterized constructor with `this`, creating multiple objects, and why multiple constructors aren't allowed
  - `20_03_Example.js` — Constructor hook: code executed when an object is created (`console.log` on instantiation)
  - `20_04_Real_Constructor.js` — Real-world constructor: a `TestCase` class (name/status/priority) modeling test results with `display()`
- **02_Public_Private** — Public vs private fields:
  - `20_05_Real.js` — Real-world class: `Browser` class with `startBrowser()`/`closeBrowser()` behaviours
  - `20_06_IQ.js` — IQ example: `APIClient` class with `get(path)` building URLs from a `baseURL`
  - `20_07_Private_Public.js` — Private fields (`#apiKey`) vs public fields (`user`), and accessing them from outside
- **03_Static_JS** — Static properties and methods:
  - `20_08_Static.js` — Static counters: `static totalTests`/`passCount` accumulating across instances (test runner)
  - `20_09_IQ.js` — IQ example: static `summary()` returning `passCount/totalTests` alongside instance methods
  - `20_10_IQ.js` — IQ example: `static collegeName` shared across `Student` objects
  - `20_11_eg.js` — Class fields example: instance fields (`b`) and their assignment in the constructor

### 21_OOPs_Encapsulation
Encapsulation in JavaScript — hiding data with private fields (`#`) and controlled access via getters/setters:
- `21_01_Example.js` — Private fields (`#child1`, `#child2`) with `getChild1()`/`setChild1()` accessors
- `21_02_Example_Car.js` — Car class with a private `#engine` field and `getEngine()`/`setEngine()` methods
- `21_03_Example_Bank.js` — Bank account with a private `#balance` and permission-checked `setBalance()` (cashier-only)
- `21_04_IQ.js` — IQ example: `TestCase` with private `#status` + static `#count`, read-only status via `run()`
- `21_05_IQ.js` — IQ example: `Bug` class (title/severity) with a `display()` method
- `21_06_IQ.js` — IQ example: `Environment` class with default constructor parameters (`staging:3000`) building a URL
- `21_07_IQ.js` — IQ example: `User` class with a `greet()` method

### 22_OOPs_Inheritance
Inheritance in JavaScript — organized into numbered sub-topics:
- **01_Single_Inheritance** — One class inheriting from one parent:
  - `22_01_SI.js` — Single inheritance basics: `LoginPage extends BasePage`, inheriting `open()`/`close()` methods
  - `22_02_Example.js` — `super` usage: `super(name)` in the constructor and `super.foo()` to call parent methods
  - `22_03_IQ.js` — IQ example: method overriding — `APITest.setup()` overrides `BaseTest.setup()`
  - `22_04_IQ.js` — IQ example: `super()` constructor call and `super.setup()`/`super.teardown()` chaining (UI test flow)
  - `22_05_IQ.js` — IQ example: polymorphism — `UnitTest`/`APITest`/`E2ETest` each override `execute()`
  - `22_06_IQ.js` — IQ example: page-object style `verify()` overrides for `LoginPage`/`DashboardPage`/`CartPage`
  - `22_07_IQ.js` — IQ example: report generators (`HTMLReport`/`JSONReport`/`TextReport`) overriding `generate()`
- **02_Multiple_Inheritance** — Why JS has no multiple inheritance:
  - `22_08_Example.js` — Multiple inheritance is not allowed (`extends F1, F2` is invalid); mixins are the alternative
  - `22_09_Mixin_eg.js` — Mixin pattern: `LoggerMixin`/`ScreenshotMixin` factory functions composing a `SmartTest` class
- **03_Multi_Level_Inheritance** — Inheritance chains (grandparent → parent → child):
  - `22_10_Example.js` — `BasePage` → `AuthPage` → `AdminPage`: `AdminPage` inherits `open()` and `log()` (super in constructor)
- **04_Hierarchical_Inheritance** — One parent, many children:
  - `22_11_Example.js` — `Father` base class extended by `Son1`/`Son2`/`Son3` siblings

### 23_OOPs_Polymorphism
Polymorphism in JavaScript — method overriding, one method name behaving differently per class:
- `23_01_Method_Overriding.js` — `APIPage.setup()` overrides `BaseTest.setup()` (each prints its own "Open Browser" message)

### 24_OOPs_Interview
OOP interview-style questions (JS + TS) — covers:
- `24_01_EX1.js` — `Bug` class (title/severity) with a `display()` method
- `24_02_EX2.js` — `Environment` class with default constructor parameters (`staging:3000`) building a URL
- `24_03_EX3.js` — `User` class with a `greet()` method
- `24_04_EX4.js` — Method chaining: `Counter` with `increment()`/`display()` returning `this`
- `24_05_EX5.js` — `super` chain: `C` → `B` → `A` `who()` calls composing `"C> B> A"`
- `24_06_IQ.ts` — TS functions with type annotations: `buildEndpoint`, `isSuccessCode`, `logTestStep`
- `24_07_IQ.ts` — TS typed arrays: filtering failed HTTP codes (`400+`) with `filter`

### 25_TypeScript
TypeScript fundamentals — JS vs TS and type annotations:
- `25_01_JS_Ex.js` — Plain JS reference: untyped variables and function
- `25_02_TS_Ex.js` — Output of `tsc` compilation (strict-mode JS equivalent) for `25_02_TS_Ex.ts`
- `25_02_TS_Ex.ts` — First TS example: `string`/`number` annotations on a variable and function
- `25_03_Example.ts` — Function return type annotation (`: void`)
- `25_04_Example.ts` — Primitive types (`string`, `number`, `boolean`, `null`, `undefined`), arrays (`number[]`, `Array<String>`), `any` vs `unknown`
- `25_05_Example.ts` — Narrowing an `unknown` value with `typeof` checks
- `25_06_Example.ts` — Function annotations: parameter and return types on `greet`
- `25_07_Example.ts` — Arrow function annotations: typed `multiply`
- `25_08_Example.ts` — Object annotations: inline `{name: string; age: number}` type
- `25_09_Example.ts` — `: void` return annotation on `sayHello`
- `25_10_Example.ts` — Function annotations: `greet` with a typed parameter and return value
- `25_11_Example.ts` — The `never` type: functions that never return (infinite loop, `throw`)

### 26_OOPs_TS_Abstraction
Abstraction in TypeScript via interfaces — organized into sub-topics:
- **Interface** — Interface fundamentals and use cases:
  - `26_01_Abstraction_eg.ts` — Abstraction overview (interface/enums/abstract class) and a `User` interface typing multiple objects
  - `26_02_Readonly.ts` — `readonly` properties: a `Point` interface whose `x`/`y` can't be modified after creation
  - `26_03_Interface_PageObject.ts` — Interface inheritance: `LoginPage`/`FreeTrialPage` extend `BasePage` (page-object style with CSS selectors)
  - `26_04_API_Response.ts` — Interface for API testing: `APIResponse` with required fields and an optional `headers?`
  - `26_05_Method_Interface.ts` — Method signatures in interfaces: `Calculator` (`add`/`subtract`) and `India` (function-typed members)
- Root files:
  - `26_06_Interface_Hook.ts` — Callable interface: `TestHook` typed before/after test hook functions
  - `26_07_Real_Config.ts` — Real config objects: `TestConfig` interface with optional `timeout?`/`retries?` (staging vs CI)
  - `26_08_Class_Interface.ts` — `class TestCase implements Executable`: a class satisfying an interface contract (`run()`, `getStatus()`)
  - `26_09_Interface_Misc.ts` — Index signatures: a `StringDictionary` interface for string-keyed objects

### 27_TS_ENUM
Enums in TypeScript — named constants for real-world test data:
- `27_01_ENUM_Example.ts` — `TestStatus` enum (`Pass`/`Fail`/`Skip`/`Pending`/`Blocked`) with string values
- `27_02_ENUM_Example.ts` — `SeverityLevels` enum for bug severity (`low` → `blocking`)
- `27_03_Real_ENUM.ts` — `Environment` enum holding environment base URLs (dev/staging/QA/prod)
- `27_04_Real_Browser_PW.ts` — Playwright-style `Browser` enum with a `launchBrowser()` switch (Chromium/Gecko/Webkit)
- `27_05_API_Real.ts` — `HTTPMethod` enum used in `sendRequest()` API calls

### 28_TS_Generic
Generics in TypeScript — reusable code that works with multiple types (`<T>`):
- `28_01_Generic_Example.ts` — First generic function `getFirstResult<T>()` returning the first array item (numbers, strings, booleans; `!` non-null assertion)
- `28_02_Generic_Class.ts` — Generic `TestDataStorage<T>` class: typed `add()`/`getFirst()`/`getAll()`/`count()` storing status codes or test names
- `28_03_API_Response.ts` — Generic `wrapResponse<T>()` pairing a status code with typed data (string/boolean responses)

### 29_TS_Private_Public_Protected
Access modifiers in TypeScript classes (`public`/`private`/`protected`):
- `29_01_PPP.ts` — `APIClient` class: `public baseURL`, `private apiKey` + `getAuthHeader()`, `protected timeout` accessible in subclasses
- `29_02_PageObjectModel.ts` — Page-object model: `BasePage` with `protected baseURL`/`navigate()` used by `LoginPage.login()`
- `29_03_Readonly.ts` — `PlayWrightConfig` with `private readonly` fields set once in the constructor

### 31_TS_Abstract_Class
Abstract classes in TypeScript — a base class with abstract (incomplete) methods forced on subclasses:
- `31_01_Abstract.ts` — `abstract class BaseTest` declaring abstract `setup()`/`execute()`/`teardown()`/`loan()` plus a complete `loan1()`; `UITest` implements the required methods

### PlayWright
Playwright and automation-related material:
- VWO PRD document
- Selenium framework references (Gen_AI)

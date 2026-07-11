# Keywords in JavaScript

> **Keyword:** A reserved word in the language that has a special meaning. You cannot use keywords as variable names, function names, or identifiers.

---

## Comparison Table — All JS Keywords Categorized

| Category | Keywords | Purpose |
|---|---|---|
| **Variable Declaration** | `var`, `let`, `const` | Declare variables with different scoping rules |
| **Control Flow (Conditional)** | `if`, `else`, `switch`, `case`, `break`, `default` | Branch execution based on conditions |
| **Loops & Iteration** | `for`, `while`, `do`, `continue`, `in`, `of` | Repeat blocks of code |
| **Functions** | `function`, `return`, `=>` (arrow) | Define and return values from functions |
| **Objects & Classes** | `class`, `extends`, `super`, `new`, `this`, `static`, `get`, `set` | OOP — create and work with objects |
| **Error Handling** | `try`, `catch`, `finally`, `throw` | Handle runtime errors gracefully |
| **Async** | `async`, `await`, `yield`, `*` (generator) | Handle asynchronous operations |
| **Module System** | `import`, `export`, `from`, `as`, `default` | Split code across files |
| **Primitive Values** | `true`, `false`, `null`, `undefined`, `NaN`, `Infinity` | Built-in constant values |
| **Type System** | `typeof`, `instanceof`, `void`, `delete` | Type checking and property operations |
| **Debugging** | `debugger` | Pause execution for debugging |
| **Strict Mode** | `"use strict"` (directive) | Enforce stricter parsing & error handling |

---

## Full Alphabetical List (ES2023+)

| Keyword | Category | Can be used as variable name? |
|---|---|---|
| `async` | Async | ❌ No |
| `await` | Async | ❌ No |
| `break` | Control Flow | ❌ No |
| `case` | Control Flow | ❌ No |
| `catch` | Error Handling | ❌ No |
| `class` | Objects & Classes | ❌ No |
| `const` | Variable Declaration | ❌ No |
| `continue` | Loops | ❌ No |
| `debugger` | Debugging | ❌ No |
| `default` | Control Flow | ❌ No |
| `delete` | Type System | ❌ No |
| `do` | Loops | ❌ No |
| `else` | Control Flow | ❌ No |
| `export` | Module System | ❌ No |
| `extends` | Objects & Classes | ❌ No |
| `false` | Primitive Values | ❌ No |
| `finally` | Error Handling | ❌ No |
| `for` | Loops | ❌ No |
| `function` | Functions | ❌ No |
| `if` | Control Flow | ❌ No |
| `import` | Module System | ❌ No |
| `in` | Loops | ❌ No |
| `instanceof` | Type System | ❌ No |
| `let` | Variable Declaration | ❌ No |
| `new` | Objects & Classes | ❌ No |
| `null` | Primitive Values | ❌ No |
| `of` | Loops | ❌ No |
| `return` | Functions | ❌ No |
| `static` | Objects & Classes | ❌ No |
| `super` | Objects & Classes | ❌ No |
| `switch` | Control Flow | ❌ No |
| `this` | Objects & Classes | ❌ No |
| `throw` | Error Handling | ❌ No |
| `true` | Primitive Values | ❌ No |
| `try` | Error Handling | ❌ No |
| `typeof` | Type System | ❌ No |
| `undefined` | Primitive Values | ❌ No |
| `var` | Variable Declaration | ❌ No |
| `void` | Type System | ❌ No |
| `while` | Loops | ❌ No |
| `with` | Control Flow | ❌ No |
| `yield` | Async | ❌ No |

---

## Reserved for Future Use (cannot use either)

`enum`, `implements`, `interface`, `package`, `private`, `protected`, `public`

---

## Key Takeaways

1. **~50 reserved keywords** in modern JavaScript — none can be used as variable names.
2. `var` / `let` / `const` are for declaration; prefer `const` by default, `let` when reassigning, avoid `var`.
3. Keywords belong to **categories** — learning them by group is easier than memorizing the list.
4. Trying to use a keyword as a variable name throws a **SyntaxError**:

```javascript
// ❌ This will throw
var let = 5;

// ✅ This works
var myLet = 5;
```

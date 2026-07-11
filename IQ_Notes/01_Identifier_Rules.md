# Identifier Rules in JavaScript

> **Identifier:** A name given to a variable, function, class, object property, or label. Identifiers are used to refer to things in code.

---

## Comparison Table — Valid vs Invalid

| Rule | Valid Example | Invalid Example | Why Invalid |
|---|---|---|---|
| **Must start with a letter, `_`, or `$`** | `name`, `_count`, `$data` | `1name`, `-value` | Starts with a digit or symbol |
| **Can contain letters, digits, `_`, `$`** | `userName1`, `total_$` | `user-name`, `first.name` | Hyphen `.` `-` not allowed |
| **Cannot be a reserved keyword** | `myVar`, `total` | `let`, `return`, `class` | These are JS keywords |
| **Case-sensitive** | `name` ≠ `Name` ≠ `NAME` | — | Each casing is a different identifier |
| **Unicode letters allowed** | `café`, `π`, `你好` | — | Any Unicode letter works |
| **No spaces allowed** | `userName` | `user name` | Space is not a valid character |

---

## Valid Identifiers — Examples

```
abc          _private      $domElement    user_name
firstName    totalAmount   camelCase      PascalCase
_            $             π              café
你好          Δx            _tempValue     config2
```

## Invalid Identifiers — Examples

```
123abc       (starts with digit)
user-name    (hyphen not allowed)
first name   (space not allowed)
var          (reserved keyword)
@username    (@ not allowed)
true         (reserved literal)
```

---

## Identifier Naming Conventions (not rules, but strongly followed)

| Convention | Pattern | When to Use | Example |
|---|---|---|---|
| **camelCase** | Starts lowercase, each word capitalized | Variables, functions, methods | `firstName`, `getUserData()` |
| **PascalCase** | Every word starts uppercase | Classes, constructors, React components | `UserProfile`, `HttpClient` |
| **snake_case** | Words separated by `_` | Rare in JS, common in Python/DB | `user_name`, `total_count` |
| **UPPER_SNAKE** | All caps with `_` | Constants (true constants) | `MAX_SIZE`, `API_BASE_URL` |
| **Hungarian notation** | Prefix indicates type | Outdated, avoid | `strName`, `intCount` |
| **`_` prefix** | `_private` | Private member convention | `_internalMethod()` |

---

## Quick Reference — Identifier Checklist

```
┌──────────────────────────────────────────────────┐
│               IDENTIFIER CHECKLIST                │
│                                                  │
│  ✅ Start:  letter (a-z, A-Z), _, or $           │
│  ✅ Body:   letters, digits, _, or $             │
│  ✅ Not:    reserved keyword (let, class, etc.)  │
│  ✅ Case:   matters (user ≠ User)                │
│  ✅ Space:  never                                │
│  ✅ Unicode: yes (π, café, 你好 all valid)        │
└──────────────────────────────────────────────────┘
```

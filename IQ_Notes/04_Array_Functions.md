# JavaScript Array Functions

## Creating Arrays

```js
// Array literal
let arr = [1, 2, 3];

// Array constructor
let arr2 = new Array(1, 2, 3);

// Array.from()
let arr3 = Array.from("hello");        // ['h','e','l','l','o']
let arr4 = Array.from([1, 2, 3], x => x * 2); // [2, 4, 6]

// Array.of()
let arr5 = Array.of(7);                // [7] (not [empty × 7])
```

## Adding / Removing Elements

| Method | Description | Example |
|--------|-------------|---------|
| `push()` | Add to end | `arr.push(4)` → `[1,2,3,4]` |
| `pop()` | Remove from end | `arr.pop()` → returns `3` |
| `unshift()` | Add to start | `arr.unshift(0)` → `[0,1,2,3]` |
| `shift()` | Remove from start | `arr.shift()` → returns `1` |
| `splice()` | Add/remove at index | `arr.splice(1, 1, 99)` → removes 1 at index 1, inserts 99 |
| `slice()` | Extract portion | `arr.slice(1, 3)` → `[2,3]` (doesn't mutate) |
| `concat()` | Merge arrays | `arr.concat([4,5])` → `[1,2,3,4,5]` |
| `fill()` | Fill with value | `arr.fill(0, 1, 3)` → `[1,0,0]` |

## Searching / Finding

| Method | Description | Example |
|--------|-------------|---------|
| `indexOf()` | First index of value | `arr.indexOf(2)` → `1` |
| `lastIndexOf()` | Last index of value | `arr.lastIndexOf(2)` → `3` |
| `includes()` | Check if exists | `arr.includes(2)` → `true` |
| `find()` | First match | `arr.find(x => x > 2)` → `3` |
| `findIndex()` | Index of first match | `arr.findIndex(x => x > 2)` → `2` |
| `findLast()` | Last match (ES2023) | `arr.findLast(x => x > 2)` → `4` |
| `findLastIndex()` | Index of last match (ES2023) | `arr.findLastIndex(x => x > 2)` → `3` |
| `filter()` | All matches | `arr.filter(x => x > 2)` → `[3,4]` |

## Iterating

| Method | Description | Example |
|--------|-------------|---------|
| `forEach()` | Loop each element | `arr.forEach(x => console.log(x))` |
| `map()` | Transform each | `arr.map(x => x * 2)` → `[2,4,6,8]` |
| `reduce()` | Accumulate | `arr.reduce((sum, x) => sum + x, 0)` → `10` |
| `reduceRight()` | Accumulate right-to-left | `arr.reduceRight(...)` |
| `some()` | Any passes test | `arr.some(x => x > 3)` → `true` |
| `every()` | All pass test | `arr.every(x => x > 0)` → `true` |
| `flatMap()` | Map then flatten | `arr.flatMap(x => [x, x*2])` → `[1,2,2,4,3,6,4,8]` |

## Sorting / Reversing

| Method | Description | Example |
|--------|-------------|---------|
| `sort()` | Sort (in-place) | `arr.sort((a,b) => a - b)` |
| `reverse()` | Reverse (in-place) | `arr.reverse()` → `[4,3,2,1]` |
| `toSorted()` | Sorted copy (ES2023) | `arr.toSorted()` |
| `toReversed()` | Reversed copy (ES2023) | `arr.toReversed()` |

## Flattening / Joining

| Method | Description | Example |
|--------|-------------|---------|
| `flat(depth)` | Flatten nested | `[1,[2,[3]]].flat(2)` → `[1,2,3]` |
| `join(sep)` | Join to string | `arr.join("-")` → `"1-2-3-4"` |
| `toString()` | Comma-separated | `arr.toString()` → `"1,2,3,4"` |

## Static Methods

```js
Array.isArray([1,2,3]);        // true
Array.isArray("hello");        // false

Array.from({length: 3}, (_, i) => i);  // [0, 1, 2]
Array.of(1, 2, 3);                      // [1, 2, 3]
```

## Practical Examples

```js
// Remove duplicates
let unique = [...new Set([1,2,2,3])];    // [1,2,3]

// Chunk array
let chunk = (arr, size) =>
  Array.from({length: Math.ceil(arr.length / size)}, (_, i) =>
    arr.slice(i * size, i * size + size)
  );

// Max/Min from array
let max = Math.max(...[3, 1, 4, 2]);     // 4
let min = Math.min(...[3, 1, 4, 2]);     // 1

// Shuffle array
let shuffle = arr => arr.sort(() => Math.random() - 0.5);

// Intersection
let intersection = (a, b) => a.filter(x => b.includes(x));

// Flatten one level (without flat())
let flatOne = [].concat(...[[1,2],[3,4]]);  // [1,2,3,4]
```

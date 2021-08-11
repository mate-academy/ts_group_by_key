# Group by key

Implement a function `groupByKey`, that takes an array of similar objects 
(`books`, `students`, etc.) and a string `field` that is one of possible item 
keys (`field: keyof Item`). The function return an object where all the 
items having the same `value` in a given `field` are group in common array under
a key equals to the `value`.
```js
const books = [
  { id: 1, color: 'red', country: 'Ukraine' },
  { id: 1, color: 'red', country: 'Italy' },
  { id: 1, color: 'green', country: 'Ukraine' },
;
```
```js
groupByKey(books, 'color') === {
  'red': [
    { id: 1, color: 'red', country: 'Ukraine' },
    { id: 1, color: 'red', country: 'Italy' },
  ],
  'green': [
    { id: 1, color: 'green', country: 'Ukraine' },
  ],
}
```
```js
groupByKey(books, 'country') === {
  'Ukraine': [
    { id: 1, color: 'red', country: 'Ukraine' },
    { id: 1, color: 'green', country: 'Ukraine' },
  ],
  'Italy': [
    { id: 1, color: 'red', country: 'Italy' },
  ],
}
```

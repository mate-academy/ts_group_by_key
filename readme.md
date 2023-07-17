# Group by key

Implement a function `groupByKey`, яка приймає масив подібних об’єктів ( books, students тощо) і рядок key, який є одним із можливих ключів елемента ( key: keyof T). Функція повертає об’єкт, у якому всі елементи згруповані за значеннями, що зберігаються в заданому key(див. приклади).

```js
const books = [
  { id: 1, color: 'red', country: 'Ukraine' },
  { id: 1, color: 'red', country: 'Italy' },
  { id: 1, color: 'green', country: 'Ukraine' },
];
```
```js
// Group books by color
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
// group books by country
groupByKey(books, 'country') === {
  'Ukraine': [
    { id: 1, color: 'red', country: 'Ukraine' },
    { id: 1, color: 'green', country: 'Ukraine' },
  ],
  'Italy': [
    { id: 1, color: 'red', country: 'Italy' },
  ],
}


Implement a function `groupByKey` that takes an array of similar objects 
(`books`, `students`, etc.) and a string `key` that is one of possible item 
keys (`key: keyof T`). The function returns an object where all the items are
grouped by values stored under a given `key` (see the examples).
```js
const books = [
  { id: 1, color: 'red', country: 'Ukraine' },
  { id: 1, color: 'red', country: 'Italy' },
  { id: 1, color: 'green', country: 'Ukraine' },
;
```
```js
// Group books by color
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
// group books by country
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

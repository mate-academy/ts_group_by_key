### Task: Sort students array

This is a similar task from the course of JS Advanced, but now it is strictly typed and uses generic types.
You need to aggregate data based on a particular key, for instance, by the author of the book.
1) You are given an interface `Item`, which has index `key` of type `string` and values of type `any`.
```
interface Item {
  [key: string]: any
}
```

2) You are given a generic interface `ItemsGroup`, which has index `key` of type `string` and values of type array of `T`.
```
interface ItemsGroup<T> {
  [key: string]: T[]
}
```

3) Your task is to implement function `groupByKey`, which takes two arguments: `array` of `T` objects and string `key`. The function should read `key` of each object in the array and group them into `ItemsGroup`.

Hint: You should use a new keyword in types definition called `keyof` for correct TypeScript type checks.



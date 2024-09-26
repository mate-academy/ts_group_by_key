type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<R extends object>(
  items: R[],
  key: keyof R,
): GroupsMap<R> {
  const result: GroupsMap<R> = {};
  // array of unique values from items objects
  const uniqueValues = [...new Set(items.map((it) => it[key]))];

  uniqueValues.forEach((val: string) => {
    /* at each iteration result is being filled with key(unique key value) =
    objects that has that value */
    result[val] = items.filter((item: R) => item[key] === val);
  });

  return result;
}

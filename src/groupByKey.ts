interface Item {
  [key: string]: any,
}

interface GroupedByKey<T> {
  [key: string] : T[],
}

export function groupByKey <T extends Item>(
  items: T[],
  field: keyof T,
): GroupedByKey<T> {
  const resultObject: GroupedByKey<T> = {};

  items.forEach((item: T) => {
    if (item[field] in resultObject) {
      resultObject[item[field]].push(item);
    } else {
      resultObject[item[field]] = [item];
    }
  });

  return resultObject;
}

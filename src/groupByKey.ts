type GroupsMap<T> = {
  [key: string]: T[];
};

type KeyType<T> = keyof T;

export function groupByKey<T>(
  items: T[],
  key: KeyType<T>,
): GroupsMap<T> {
  const grouppedItems = items.reduce((acc, item) => {
    const currKey = <string>item[key];

    if (!(currKey in acc)) {
      acc[currKey] = [];
    }

    acc[currKey].push(item);

    return acc;
  }, {} as GroupsMap<T>);

  return grouppedItems;
}

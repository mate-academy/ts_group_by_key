type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<ObjectToSort, Key extends keyof ObjectToSort>(
  items: ObjectToSort[],
  key: Key,
): GroupsMap<ObjectToSort> {
  const sortedItems: GroupsMap<ObjectToSort> = {};

  items.forEach((item) => {
    const keyValue = String(item[key]);

    if (!sortedItems[keyValue]) {
      sortedItems[keyValue] = [item];
    } else {
      sortedItems[keyValue].push(item);
    }
  });

  return sortedItems;
}

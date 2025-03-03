type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey(items, key) {
  // write code here;
  return items.reduce((acc: GroupsMap<T>, item: T) => {
    const groupKey = String(item[key]);

    if (!acc[groupKey]) {
      acc[groupKey] = [];
    }
    acc[groupKey].push(item);

    return acc;
  }, {});
}

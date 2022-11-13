type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(
  items: T[],
  key: keyof T,
): GroupsMap<T> {
  const grouppedItem: GroupsMap<T> = {};

  items.forEach((item) => {
    const keyToGroup: T[keyof T] = item[key];

    const valueArr = items.filter((point) => keyToGroup === point[key]);

    grouppedItem[String(keyToGroup)] = valueArr;
  });

  return grouppedItem;
}

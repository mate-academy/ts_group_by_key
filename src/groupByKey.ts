type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey(items, key): GroupsMap<object> {
  const newObj: GroupsMap<object> = {};

  items.forEach((item) => {
    const value = String(item[key]);

    if (!newObj[value]) {
      newObj[value] = [];
    }

    newObj[value].push(item);
  });

  return newObj;
}

type GroupsMap<T> = {
  [key: string]: T[];
};

type Value = string | number;

type Item = {
  [key: string]: Value;
};

export function groupByKey(items: Item[], key: string): GroupsMap<object> {
  const result: GroupsMap<Item> = {};

  items.forEach((item: Item): void => {
    result[item[key]] = [];
  });

  for (let i = 0; i < items.length; i += 1) {
    const itemKey: Value = items[i][key];

    if (result[itemKey]) {
      result[itemKey].push(items[i]);
    }
  }

  return result;
}

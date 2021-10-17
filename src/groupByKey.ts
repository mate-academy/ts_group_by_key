type GroupsMap<T> = {
  [key: string]: T[];
};

type Item = {
  [key: string]: string | number;
};

export function groupByKey(items: Item[], key: keyof Item): GroupsMap<Item> {
  // write code here;
  const result: GroupsMap<Item> = {};

  items.forEach((item) => {
    const newValue = item[key];

    if (!result[newValue]) {
      result[newValue] = [];
    }

    result[newValue].push(item);
  });

  return result;
}

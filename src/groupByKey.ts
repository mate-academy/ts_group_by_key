type GroupsMap<T> = {
  [key: string]: T[];
};

type Item = {
  [key: string]: string | number;
};

export function groupByKey(items: Item[], key: keyof Item): GroupsMap<Item> {
  const resultObj: GroupsMap<Item> = {};

  items.forEach((item) => {
    const value = item[key];

    if (!resultObj[value]) {
      resultObj[value] = [];
    }

    resultObj[value].push(item);
  });

  return resultObj;
}

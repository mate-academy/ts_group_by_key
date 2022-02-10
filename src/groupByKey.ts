type Item = {
  [key: string]: any;
};

type GroupsMap = {
  [key: string]: Item[];
};

export function groupByKey(items: Item[], key: keyof Item): GroupsMap {
  const result: GroupsMap = {};

  items.forEach((item) => {
    const keyName = item[key];

    if (!result[keyName]) {
      result[keyName] = [];
    }

    result[keyName].push(item);
  });

  return result;
}

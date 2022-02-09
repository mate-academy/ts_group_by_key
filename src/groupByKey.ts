type Item = {
  [key: string]: any;
};

type GroupsMap = {
  [key: string]: Item[];
};

export function groupByKey(items: Item[], key: keyof Item): GroupsMap {
  const result: GroupsMap = {};

  items.forEach((item) => {
    const k = item[key];

    if (!result[k]) {
      result[k] = [];
    }

    result[k].push(item);
  });

  return result;
}

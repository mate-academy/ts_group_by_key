type GroupsMap<T> = {
  [key: string]: T[];
};

type Item = object;

export function groupByKey(items: Item[], key: keyof Item): GroupsMap<Item> {
  const group: GroupsMap<Item> = {};

  items.forEach((item) => {
    const groupKey = item[key];

    if (!Object.prototype.hasOwnProperty.call(group, groupKey)) {
      group[groupKey] = [];
    }

    group[groupKey].push(item);
  });

  return group;
}

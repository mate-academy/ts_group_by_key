type GroupsMap<T> = {
  [key: string]: T[];
};

type Item = {
  [key: string]: string;
};

export function groupByKey(items: Item[], key: string): GroupsMap {
  const groups: GroupsMap = {};

  items.forEach((item) => {
    const value = item[key];

    if (!groups[value]) {
      groups[value] = [];
    }

    groups[value].push(item);
  });

  return groups;
}

type Item = {
  [key: string]: any;
};

type GroupsMap = {
  [key: string]: Item[];
};

export function groupByKey(items: Item[], key: keyof Item): GroupsMap {
  const groups: GroupsMap = {};

  items.forEach((item) => {
    if (groups[item[key]]) {
      groups[item[key]].push(item);
    } else {
      groups[item[key]] = [];
      groups[item[key]].push(item);
    }
  });

  return groups;
}

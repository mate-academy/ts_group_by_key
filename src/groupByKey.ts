type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: Array<T>, key: keyof T): GroupsMap<T> {
  const groups: GroupsMap<T> = {};

  items.reduce((_, cur) => {
    const groupKey: string = `${cur[key]}`;

    if (groupKey in groups) {
      groups[groupKey].push(cur);
    } else {
      groups[groupKey] = [cur];
    }

    return cur;
  }, {});

  return groups;
}

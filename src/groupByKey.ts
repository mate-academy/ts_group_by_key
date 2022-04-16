type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: Array<T>, key: keyof T): GroupsMap<T> {
  const groups: GroupsMap<T> = {};

  items.forEach((item) => {
    const groupKey: string = `${item[key]}`;

    if (groups[groupKey]) {
      groups[groupKey].push(item);
    } else {
      groups[groupKey] = [item];
    }
  });

  return groups;
}

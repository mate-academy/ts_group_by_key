type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const group: GroupsMap<T> = {};

  for (let index = 0; index < items.length; index += 1) {
    const item = String(items[index][key]);

    if (item in group) {
      group[item].push(items[index]);
    } else {
      group[item] = [items[index]];
    }
  }

  return group;
}

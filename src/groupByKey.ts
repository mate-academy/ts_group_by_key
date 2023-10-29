type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((obj: GroupsMap<T>, item: T) => {
    const group = obj;
    const itemKey = String(item[key]);

    if (itemKey in group) {
      group[itemKey].push(item);
    } else {
      group[itemKey] = [item];
    }

    return group;
  }, {});
}

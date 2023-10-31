type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((resultObj: GroupsMap<T>, item) => {
    const groupKey = item[key] as string;
    const group = resultObj;

    if (!group[groupKey]) {
      group[groupKey] = [item];
    } else {
      group[groupKey].push(item);
    }

    return group;
  }, {});
}

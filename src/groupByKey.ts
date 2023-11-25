type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupsMap: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const keyValue: string = String(item[key]);

    if (!groupsMap[keyValue]) {
      groupsMap[keyValue] = [item];
    } else {
      groupsMap[keyValue].push(item);
    }
  });

  return groupsMap;
}

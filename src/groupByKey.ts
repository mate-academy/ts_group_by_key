type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupMap: GroupsMap<T> = {};

  items.forEach((item) => {
    const nameOfGroup = String(item[key]);

    if (groupMap[nameOfGroup] === undefined) {
      groupMap[nameOfGroup] = [item];
    } else {
      groupMap[nameOfGroup].push(item);
    }
  });

  return groupMap;
}

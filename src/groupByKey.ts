type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupMap: GroupsMap<T> = {};

  items.forEach((item) => {
    const itemKey = String(item[key]);

    if (!groupMap[itemKey]) {
      groupMap[itemKey] = [];
    }

    groupMap[itemKey].push(item);
  });

  return groupMap;
}

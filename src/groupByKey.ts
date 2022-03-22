type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupMap: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const groupKey: string = String(item[key]);

    if (!groupMap[groupKey]) {
      groupMap[groupKey] = [] as T[];
    }

    groupMap[groupKey].push(item);
  });

  return groupMap;
}

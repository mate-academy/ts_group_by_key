type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: string): GroupsMap<T> {
  const groupMap: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const groupKey = item[key as keyof GroupsMap<T>];

    if (!groupMap[groupKey]) {
      groupMap[groupKey] = [] as T[];
    }

    groupMap[groupKey].push(item);
  });

  return groupMap;
}

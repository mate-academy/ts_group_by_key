  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groopsMap: GroupsMap<T> = {};

  items.forEach((item) => {
    const groop = String(item[key]);

    if (!groopsMap[groop]) {
      groopsMap[groop] = [item];
    } else {
      groopsMap[groop].push(item);
    }
  });

  return groopsMap;
}

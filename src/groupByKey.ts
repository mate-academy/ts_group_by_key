type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const map: GroupsMap<T> = {};

  for (const item of items) {
    const keyValue = String(item[key]);

    if (map[keyValue]) {
      map[keyValue].push(item);
    } else {
      map[keyValue] = [];
      map[keyValue].push(item);
    }
  }

  return map;
}

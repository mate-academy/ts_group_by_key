type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const grouped: GroupsMap<T> = {};

  items.forEach((item) => {
    const stringKey = String(item[key]);

    if (!(stringKey in grouped)) {
      grouped[stringKey] = [item];
    } else {
      grouped[stringKey].push(item);
    }
  });

  return grouped;
}

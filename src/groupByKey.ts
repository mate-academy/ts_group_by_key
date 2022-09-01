type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const grouped: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const value: string = String(item[key]);

    if (!(value in grouped)) {
      grouped[value] = [];
    }

    grouped[value].push(item);
  });

  return grouped;
}

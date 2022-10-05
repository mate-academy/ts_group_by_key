type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const grouped: GroupsMap<T> = {};

  items.forEach((item) => {
    if (!grouped[`${item[key]}`]) {
      grouped[`${item[key]}`] = [];
    }

    grouped[`${item[key]}`].push(item);
  });

  return grouped;
}

type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const grouped: GroupsMap<T> = {};

  items.forEach((item) => {
    const resKey = String(item[key]);

    if (!grouped[resKey]) {
      grouped[resKey] = [];
    }

    grouped[resKey].push(item);
  });

  return grouped;
}

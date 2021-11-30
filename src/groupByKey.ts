type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key:keyof T):GroupsMap<T> {
  const grouped:GroupsMap<T> = {};

  items.forEach((item) => {
    const val = String(item[key]);

    if (!grouped[val]) {
      grouped[val] = [];
    }

    grouped[val].push(item);
  });

  return grouped;
}

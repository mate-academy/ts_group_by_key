type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const grouped: GroupsMap<T> = {};

  items.map((item) => {
    const value = item[key].toString();

    if (!grouped[value]) {
      grouped[value] = [];
    }

    grouped[value].push(item);

    return 1;
  });

  return grouped;
}

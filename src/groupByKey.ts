type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const grouped: GroupsMap<T> = {};

  items.forEach((element) => {
    const value = String(element[key]);

    if (!grouped[value]) {
      grouped[value] = [];
    }

    grouped[value].push(element);
  });

  return grouped;
}

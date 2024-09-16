type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const grouped: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const groupValue = String(item[key]);

    if (!grouped[groupValue]) {
      grouped[groupValue] = [];
    }

    grouped[groupValue].push(item);
  });

  return grouped;
}

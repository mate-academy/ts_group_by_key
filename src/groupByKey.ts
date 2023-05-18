type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const grouped: GroupsMap<T> = {};

  items.forEach((item) => {
    const keyValue = item[key] as string;

    if (keyValue in grouped) {
      grouped[keyValue].push(item);
    } else {
      grouped[keyValue] = [item];
    }
  });

  return grouped;
}

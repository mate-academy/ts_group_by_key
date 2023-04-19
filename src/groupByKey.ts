type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedByKey: GroupsMap<T> = {};

  items.forEach((item) => {
    const newKey = item[key] as string;

    if (!groupedByKey[newKey]) {
      groupedByKey[newKey] = [];
    }
    groupedByKey[newKey].push(item);
  });

  return groupedByKey;
}

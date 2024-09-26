type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedBy: GroupsMap<T> = {};

  items.forEach((item) => {
    const currentKey = String(item[key]);

    if (!groupedBy[currentKey]) {
      groupedBy[currentKey] = [];
    }

    groupedBy[currentKey].push(item);
  });

  return groupedBy;
}

type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupped: GroupsMap<T> = {};

  items.forEach((item) => {
    const itemKey = String(item[key]);

    if (!groupped[itemKey]) {
      groupped[itemKey] = [];
    }

    groupped[itemKey].push(item);
  });

  return groupped;
}

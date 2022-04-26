type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items:T[], key: keyof T): GroupsMap<T> {
  const groupByItem: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const currKey = String(item[key]);

    if (!groupByItem[currKey]) {
      groupByItem[currKey] = [];
    }

    groupByItem[currKey].push(item);
  });

  return groupByItem;
}

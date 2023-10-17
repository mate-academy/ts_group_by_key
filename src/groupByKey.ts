type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey
<T extends Record<string, string | number>>(items: T[], key: keyof T):
GroupsMap<T> {
  const groupedItems: GroupsMap<T> = items
    .reduce((acc: GroupsMap<T>, item: T) => {
      const groupBy = item[key];

      if (acc[groupBy]) {
        acc[groupBy].push(item);
      } else {
        acc[groupBy] = [item];
      }

      return acc;
    }, {});

  return groupedItems;
}

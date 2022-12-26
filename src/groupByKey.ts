type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedItems: GroupsMap<T> = items.reduce((acc: any, curr: T) => {
    if (!acc[curr[key]]) {
      acc[curr[key]] = [];
    }

    acc[curr[key]].push(curr);

    return acc;
  }, {});

  return groupedItems;
}

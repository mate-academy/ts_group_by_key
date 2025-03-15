type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupItems = items.reduce((acc: GroupsMap<T>, item) => {
    const temp = String(item[key]);

    if (!acc[temp]) {
      acc[temp] = [];
    }
    acc[temp].push(item);

    return acc;
  }, {});

  return groupItems;
}

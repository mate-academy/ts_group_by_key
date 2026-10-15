type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedItems: GroupsMap<T> = {};

  for (const item of items) {
    const value: string = item[key] as string;

    if (!(value in groupedItems)) {
      groupedItems[value] = [];
    }

    groupedItems[value].push(item);
  }

  return groupedItems;
}

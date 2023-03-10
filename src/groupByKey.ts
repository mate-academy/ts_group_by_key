type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedItems: GroupsMap<T> = {};

  items.forEach((item) => {
    const groupBy = String(item[key]);

    if (groupBy in groupedItems) {
      return;
    }

    groupedItems[groupBy] = items.filter(
      (element) => String(element[key]) === groupBy,
    );
  });

  return groupedItems;
}

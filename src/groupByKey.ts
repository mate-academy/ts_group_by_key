type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey <T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedItems: GroupsMap<T> = {};

  items.forEach((element) => {
    const filterKey = String(element[key]);

    if (!groupedItems[filterKey]) {
      groupedItems[filterKey] = [];
    }
    groupedItems[filterKey].push(element);
  });

  return groupedItems;
}

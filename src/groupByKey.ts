type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(
  items: T[],
  key: keyof T,
): GroupsMap<T> {
  const groupedItems = {};

  items.forEach((obj) => {
    const groupName = String(obj[key]);

    if (!(groupName in groupedItems)) {
      groupedItems[groupName] = [];
    }

    groupedItems[groupName].push(obj);
  });

  return groupedItems;
}

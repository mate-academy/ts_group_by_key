type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedItems: GroupsMap<T> = {};

  items.forEach((item) => {
    const newKey = String(item[key]);

    if (!Object.prototype.hasOwnProperty
      .call(groupedItems, newKey)) {
      groupedItems[newKey] = [item];

      return;
    }

    groupedItems[newKey].push(item);
  });

  return groupedItems;
}

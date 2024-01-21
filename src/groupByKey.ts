type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((groupedItems: GroupsMap<T>, item: T) => {
    const itemKey = String(item[key]);
    const updatedGroupedItems = { ...groupedItems };

    if (itemKey in updatedGroupedItems) {
      updatedGroupedItems[itemKey].push(item);
    } else {
      updatedGroupedItems[itemKey] = [item];
    }

    return updatedGroupedItems;
  }, {});
}

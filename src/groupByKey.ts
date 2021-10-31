type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((groupedItems: GroupsMap<T>, item: T) => {
    const currentKey = `${item[key]}`;
    const groupedItemsCopy = {
      ...groupedItems,
    };

    if (!groupedItemsCopy[currentKey]) {
      groupedItemsCopy[currentKey] = [item];
    } else {
      groupedItemsCopy[currentKey].push(item);
    }

    return groupedItemsCopy;
  }, {});
}

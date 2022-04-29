type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce<GroupsMap<T>>((grouped, item) => {
    const currKey = String(item[key]);
    const groupedItems = grouped;

    if (currKey in groupedItems) {
      groupedItems[currKey].push(item);
    } else {
      groupedItems[currKey] = [item];
    }

    return groupedItems;
  }, {});
}

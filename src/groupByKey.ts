type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedItems: GroupsMap<T> = {};

  items.forEach((item) => {
    if (`${item[key]}` in groupedItems) {
      groupedItems[`${item[key]}`].push(item);
    } else {
      groupedItems[`${item[key]}`] = [item];
    }
  });

  return groupedItems;
}

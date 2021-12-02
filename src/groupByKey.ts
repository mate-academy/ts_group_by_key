type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedItems: GroupsMap<T> = {};

  items.forEach((item: T) => {
    if (groupedItems[String(item[key])]) {
      groupedItems[String(item[key])].push(item);
    } else {
      groupedItems[String(item[key])] = [item];
    }
  });

  return groupedItems;
}

type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: string): GroupsMap<T> {
  const groupedItems: GroupsMap<T> = {};

  items.forEach((el) => {
    if (el[key] in groupedItems) {
      groupedItems[el[key]].push(el);
    } else {
      groupedItems[el[key]] = [el];
    }
  });

  return groupedItems;
}

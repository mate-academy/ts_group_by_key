type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  // write code here;
  const groupedItems: GroupsMap<T> = {};

  items.forEach((item) => {
    const newKey = `${item[key]}`;

    if (!(newKey in groupedItems)) {
      groupedItems[newKey] = [];
    }

    groupedItems[newKey].push(item);
  });

  return groupedItems;
}

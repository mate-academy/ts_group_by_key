type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const grouppedItems: GroupsMap<T> = {};

  items.forEach((element) => {
    const itemKey = `${element[key]}`;

    if (!grouppedItems[itemKey]) {
      grouppedItems[itemKey] = [];
    }

    grouppedItems[itemKey].push(element);
  });

  return grouppedItems;
}

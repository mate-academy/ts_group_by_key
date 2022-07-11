type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedItems: GroupsMap<T> = {};

  items.forEach((obj) => {
    const prop = String(obj[key]);

    if (!groupedItems[prop]) {
      groupedItems[prop] = [];
    }

    groupedItems[prop].push(obj);
  });

  return groupedItems;
}

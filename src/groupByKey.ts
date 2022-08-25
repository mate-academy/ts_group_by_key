type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const grouppedItems: GroupsMap<T> = {};

  items.forEach((element) => {
    const prop = String(element[key]);

    if (!grouppedItems[prop]) {
      grouppedItems[prop] = [];
    }

    grouppedItems[prop].push(element);
  });

  return grouppedItems;
}

type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const grouppedItems: GroupsMap<T> = {};

  items.forEach((item) => {
    const groupBy = String(item[key]);

    if (grouppedItems[groupBy]) {
      grouppedItems[groupBy].push(item);
    } else {
      grouppedItems[groupBy] = [item];
    }
  });

  return grouppedItems;
}

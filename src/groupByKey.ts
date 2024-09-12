type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const gropedItems: GroupsMap<T> = {};

  items.forEach((item) => {
    const value: string = String(item[key]);

    if (!gropedItems[value]) {
      gropedItems[value] = [];
    }

    gropedItems[value].push(item);
  });

  return gropedItems;
}

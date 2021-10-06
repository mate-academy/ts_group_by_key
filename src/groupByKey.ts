type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedObjects: GroupsMap<T> = {};

  for (let i: number = 0; i < items.length; i + 1) {
    const currentItem = `${items[i][key]}`;

    if (groupedObjects[currentItem]) {
      groupedObjects[currentItem].push(items[i]);
    } else {
      groupedObjects[currentItem] = [items[i]];
    }
  }

  return groupedObjects;
}

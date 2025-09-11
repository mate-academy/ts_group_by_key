type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const newItem: GroupsMap<T> = {};

  items.forEach((Element) => {
    const groupKey = String(Element[key]);

    if (!newItem[groupKey]) {
      newItem[groupKey] = [];
    }

    newItem[groupKey].push(Element);
  });

  return newItem;
}

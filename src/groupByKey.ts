type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(
  items: T[],
  key: string,
): GroupsMap<T> {
  const groupedItems: GroupsMap<T> = {};

  items.forEach((item) => {
    if (!Object.prototype.hasOwnProperty.call(groupedItems, item[key])) {
      groupedItems[item[key]] = [];
    }

    groupedItems[item[key]].push(item);
  });

  return groupedItems;
}

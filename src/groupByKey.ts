type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((groupedItems: GroupsMap<T>, item) => {
    const itemKey = `${item[key]}`;

    if (itemKey in groupedItems) {
      groupedItems[itemKey].push(item);

      return groupedItems;
    }

    const mapping: GroupsMap<T> = {};

    mapping[itemKey] = [item];

    return {
      ...groupedItems,
      ...mapping,
    };
  }, {});
}

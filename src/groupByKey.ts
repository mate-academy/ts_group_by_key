type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((GroupedItems: GroupsMap<T>, item) => {
    const itemKey = `${item[key]}`;

    if (itemKey in GroupedItems) {
      GroupedItems[itemKey].push(item);

      return GroupedItems;
    }

    const mapping: GroupsMap<T> = {};

    mapping[itemKey] = [item];

    return {
      ...GroupedItems,
      ...mapping,
    };
  }, {});
}

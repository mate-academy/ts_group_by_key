type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey(items: object[], key: string): {} {
  if (items.length === 0) {
    return {};
  }

  if (!items[0].hasOwnProperty(key)) {
    return {};
  }

  const ITEM = items[0][key];

  type ItemType = typeof ITEM;

  return items.reduce((keyValues: GroupsMap<ItemType>, item: object) => {
    const group: ItemType = item[key];

    if (keyValues.hasOwnProperty(group)) {
      keyValues[group].push(item);

      return keyValues;
    }

    return {
      ...keyValues,
      [group]: [item],
    };
  }, {});
}

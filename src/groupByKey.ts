type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey(items: object[], key: string): GroupsMap<object> {
  const groupedKeys: GroupsMap<object> = {};

  items.forEach((item) => {
    const valueOfKey = item[key as keyof typeof item];

    if (Object.prototype.hasOwnProperty.call(groupedKeys, valueOfKey)
    === false) {
      groupedKeys[valueOfKey] = [item];
    } else {
      groupedKeys[valueOfKey].push(item);
    }
  });

  return groupedKeys;
}

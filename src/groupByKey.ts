type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T extends Record<string, any>>(
  items: T[],
  key: keyof T,
): GroupsMap<T> {
  return items.reduce((groups: GroupsMap<T>, item: T) => {
    const value = item[key];
    const groupsCopy = { ...groups };

    groupsCopy[value] = groupsCopy[value] || [];
    groupsCopy[value].push(item);

    return groupsCopy;
  }, {});
}

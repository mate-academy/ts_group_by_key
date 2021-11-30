/* eslint-disable no-prototype-builtins */
type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(
  items: T[],
  key: keyof T,
): GroupsMap<T> | undefined {
  const groupedItems: GroupsMap<T> = {};

  return items.reduce((group, item) => {
    const groupKey = String(item[key]);

    if (group[groupKey]) {
      group[groupKey].push(item);

      return group;
    }

    return {
      ...group,
      [groupKey]: [item],
    };
  }, groupedItems);
}

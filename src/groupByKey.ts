
type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T, K extends keyof T>(
  items: T[],
  key: K,
) :GroupsMap<T> {
  const groups: GroupsMap<T> = {};

  items.forEach((item) => {
    const itemKey = String(item[key]);

    if (itemKey in groups) {
      groups[itemKey].push(item);
    } else {
      groups[itemKey] = [item];
    }
  });

  return groups;
}

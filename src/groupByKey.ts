type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T extends Record<string, any>>(
  items: T[],
  key: keyof T,
): GroupsMap<T> {
  const groups: GroupsMap<T> = {};

  items.forEach((item) => {
    const value = item[key];

    if (groups[String(value)]) {
      groups[String(value)].push(item);
    } else {
      groups[String(value)] = [item];
    }
  });

  return groups;
}

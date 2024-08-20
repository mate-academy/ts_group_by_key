type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce<GroupsMap<T>>((acc, current) => {
    const itemKey = String(current[key]);

    if (Object.hasOwn(acc, itemKey)) {
      acc[itemKey].push(current);
    } else {
      acc[itemKey] = [current];
    }

    return acc;
  }, {});
}

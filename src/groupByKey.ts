type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(
  items: T[],
  key: keyof T,
): GroupsMap<T> {
  const sortedBy: GroupsMap<T> = {};

  items.forEach((item) => {
    const value = String(item[key]);

    if (sortedBy[value]) {
      sortedBy[value].push(item);
    } else {
      sortedBy[value] = [item];
    }
  });

  return sortedBy;
}

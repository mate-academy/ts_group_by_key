type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(
  items: T[],
  key: keyof T,
): GroupsMap<T> {
  const groups: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const groupsKey = `${item[key]}`;

    if (!groups[groupsKey]) {
      groups[groupsKey] = [];
    }

    groups[groupsKey].push(item);
  });

  return groups;
}

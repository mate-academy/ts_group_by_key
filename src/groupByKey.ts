type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groups: GroupsMap<T> = {};

  items.forEach((item) => {
    const value = `${item[key]}`;

    if (!groups[value]) {
      groups[value] = [item];
    } else {
      groups[value].push(item);
    }
  });

  return groups;
}

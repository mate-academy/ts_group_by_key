type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groups: GroupsMap<T> = {};

  for (const item of items) {
    const value = `${item[key]}`;

    if (!(value in groups)) {
      groups[value] = [item];
    } else {
      groups[value].push(item);
    }
  }

  return groups;
}

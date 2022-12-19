type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groups: GroupsMap<T> = {};

  items.forEach((item) => {
    const newKey: string = `${item[key]}`;

    if (!(newKey in groups)) {
      groups[newKey] = [item];
    } else {
      groups[newKey].push(item);
    }
  });

  return groups;
}

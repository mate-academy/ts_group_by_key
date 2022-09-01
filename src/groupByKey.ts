/* eslint-disable no-plusplus */
type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groups: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const valueOfKey = item[key] as string;

    if (!groups[valueOfKey]) {
      groups[valueOfKey] = [];
    }
    groups[valueOfKey].push(item);
  });

  return groups;
}

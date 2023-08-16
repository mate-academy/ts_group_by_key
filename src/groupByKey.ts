/* eslint-disable no-restricted-syntax */
type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupsMap: GroupsMap<T> = {};

  for (const item of items) {
    const keyValue = item[key] as unknown as string;

    if (!groupsMap[keyValue]) {
      groupsMap[keyValue] = [];
    }

    groupsMap[keyValue].push(item);
  }

  return groupsMap;
}

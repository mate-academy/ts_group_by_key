// type GroupsMap<T> = {
//   [key: string]: T[];
// };

type GroupsMap<T> = Record<number | string, T[]>;

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupsMap: GroupsMap<T> = {};

  /* eslint-disable-next-line */
  for (const item of items) {
    const keyValue = item[key];

    if (typeof keyValue !== 'string' && typeof keyValue !== 'number') {
      throw new Error('Value of key for grouping should have type string');
    }

    if (keyValue in groupsMap) {
      groupsMap[keyValue].push(item);
    } else {
      groupsMap[keyValue] = [item];
    }
  }

  return groupsMap;
}

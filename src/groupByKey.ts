type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  for (const item of items) {
    const groupName: string = String(item[key]);

    if (result[groupName]) {
      result[groupName].push(item);
    } else {
      result[groupName] = [item];
    }
  }

  return result;
}

type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  // write code here;
  const result: GroupsMap<T> = {};

  for (const item of items) {
    const groupId = String(item[key]);

    if (!result[groupId]) {
      result[groupId] = [item];
    } else {
      result[groupId].push(item);
    }
  }

  return result;
}

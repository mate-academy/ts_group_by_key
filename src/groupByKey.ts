type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  // write code here;
  const result: GroupsMap<T> = {};

  for (const item of items) {
    const groupName = String(item[key]);

    if (!result[groupName]) {
      result[groupName] = [];
    }

    result[groupName].push(item);
  }

  return result;
}

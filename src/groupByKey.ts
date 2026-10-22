type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  // write code here;
  const result: GroupsMap<T> = {};

  for (const item of items) {
    const k = String(item[key]);

    if (!result[k]) {
      result[k] = [];
      result[k].push(item);
    } else {
      result[k].push(item);
    }
  }

  return result;
}

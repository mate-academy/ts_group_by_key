type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const res = {};

  // Iterate over objects.
  for (const item of items) {
    // Iterate over current object keys
    if (item[key] in res) {
      res[item[key]].push(item);
    } else {
      res[item[key]] = [item];
    }
  }

  return res;
}

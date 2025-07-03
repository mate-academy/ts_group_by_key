type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  // write code here;
  if (items.length === 0) {
    return {};
  }

  const objectGrouped: GroupsMap<T> = {};

  if (items.length === 0) {
    return {};
  }

  items.forEach((item: T) => {
    if (!objectGrouped[item[key].toString()]) {
      objectGrouped[item[key].toString()] = items.filter((t: T) => {
        return t[key] === item[key];
      });
    }
  });

  return objectGrouped;
}

type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T extends object>(
  items: T[],
  key: keyof T,
): GroupsMap<T> {
  const uniqueValues = [];
  const result: GroupsMap<T> = {};

  for (const item of items) {
    if (!uniqueValues.includes(item[key])) {
      uniqueValues.push(item[key]);
    }
  }

  for (const value of uniqueValues) {
    result[value] = items.filter((item) => item[key] === value);
  }

  return result;
}

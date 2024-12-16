type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};
  const arrValues: string[] = [];

  for (const item of items) {
    const groupKey = item[key] as string;

    if (!arrValues.includes(groupKey)) {
      arrValues.push(groupKey);
    }
  }

  for (const item of arrValues) {
    const arrFiltered = items.filter((el) => el[key] === item);

    result[item] = arrFiltered;
  }

  return result;
}

type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};
  const newKeys: string[] = items.map((item) => String(item[key]));

  for (const newKey of newKeys) {
    if (!result[newKey]) {
      result[newKey] = items.filter((item) => String(item[key]) === newKey);
    }
  }

  return result;
}

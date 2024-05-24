type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const keyGroups: string[] = [...new Set(items.map((item) => item[key]))];
  const result: GroupsMap<T> = {};

  keyGroups.forEach((keyGroup) => {
    result[keyGroup] = items.filter((item) => item[key] === keyGroup);
  });

  return result;
}

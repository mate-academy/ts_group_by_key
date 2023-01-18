type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const keyValues = items.map((item) => item[key]);
  const group: GroupsMap<T> = {};

  keyValues.forEach((value) => {
    if (!(String(value) in group)) {
      group[String(value)] = items.filter((item) => item[key] === value);
    }
  });

  return group;
}

type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const values: string[] = items.map((item: T) => item[key] as string);
  const groupedObject: GroupsMap<T> = {};

  values.forEach((value) => {
    groupedObject[value] = items.filter((item) => item[key] === value);
  });

  return groupedObject;
}

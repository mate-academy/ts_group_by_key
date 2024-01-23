type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(
  items: GroupsMap<T>,
  key: keyof T,
): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.map((item: T) => (
    result[item[key]] = items.filter((i) => i[key] === item[key])
  ));

  return result;
}

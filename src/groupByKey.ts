type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = Object.fromEntries(
    items.map((item) => [String(item[key]), []]),
  );

  for (const item of items) {
    result[String(item[key])].push(item);
  }

  return result;
}

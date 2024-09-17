type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};
  const findKeys: Set<any> = new Set(items.map((item: T) => item[key]));

  findKeys.forEach((keyFrom) => {
    result[keyFrom] = items.filter((item:T) => item[key] === keyFrom);
  });

  return result;
}

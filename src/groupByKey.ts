type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const keysSet: Set<T[keyof T]> = new Set();
  const obj: GroupsMap<T> = {};

  for (const k of items) {
    keysSet.add(k[key]);
  }

  keysSet.forEach((a) => {
    obj[String(a)] = items.filter((item: T) => item[key] === a);
  });

  return obj;
}

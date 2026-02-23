export type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const obj: GroupsMap<T> = {};

  for (const el of items) {
    const value = String(el[key]);

    if (!obj[value]) {
      obj[value] = [];
    }

    obj[value].push(el);
  }

  return obj;
}

type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const obj: GroupsMap<T> = {};

  for (let i = 0; i < items.length; i += 1) {
    const element = items[i];
    const value = element[key] as unknown as string;

    if (!obj[value]) {
      obj[value] = [];
    }
    obj[value].push(element);
  }

  return obj;
}

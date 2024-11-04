type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const obj: GroupsMap<T> = {};

  for (let i = 0; i < items.length; i++) {
    const value = items[i][key] as string;

    if (!obj.hasOwnProperty(value)) {
      obj[value] = [];
      obj[value].push(items[i]);
    } else {
      obj[value].push(items[i]);
    }
  }

  return obj;
}

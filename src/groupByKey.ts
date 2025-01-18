type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const obj: GroupsMap<T> = {};

  for (const item of items) {
    const keyGroup = String(item[key]);

    if (obj[keyGroup]) {
      obj[keyGroup].push(item);
    } else {
      obj[keyGroup] = [item];
    }
  }

  return obj;
}

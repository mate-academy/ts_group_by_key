type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const obj: GroupsMap<T> = {};

  for (const i of items) {
    const keyGroup = String(i[key]);

    if (obj[keyGroup]) {
      obj[keyGroup].push(i);
    } else {
      obj[keyGroup] = [i];
    }
  }

  return obj;
}

type GroupsMap<T> = {
  [key: string]: T[];
};

function groupByKey<T>(arg: T[], key: keyof T): GroupsMap<T> {
  const obj: GroupsMap<T> = {};

  for (const el of arg) {
    const value = String(el[key]);

    if (!obj[value]) {
      obj[value] = [];
    }

    obj[value].push(el);
  }

  return obj;
}

type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: T): GroupsMap<T> {
  const obj: GroupsMap<T> = {};

  for(const item of items) {
    const value = String(item[key]);

    if (!obj[value]) {
      obj[value] = [];
    };

    obj[value].push(item);
  }

  return obj;
}

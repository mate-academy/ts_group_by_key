type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const gropedObj: GroupsMap<T> = {};

  for (const item of items) {
    const newKey = String(item[key]);

    if (!Object.hasOwn(gropedObj, newKey)) {
      gropedObj[newKey] = [];
    }

    gropedObj[newKey].push(item);
  }

  return gropedObj;
}

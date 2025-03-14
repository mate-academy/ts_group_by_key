type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const resObj: GroupsMap<T> = {};

  for (const item of items) {
    const currentKey = item[key] as string;

    if (!resObj[currentKey]) {
      resObj[currentKey] = [];
    }

    resObj[currentKey].push(item);
  }

  return resObj;
}

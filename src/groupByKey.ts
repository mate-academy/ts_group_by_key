type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const resultObj: GroupsMap<T> = {};

  items.forEach((item) => {
    const itemKey = item[key] as keyof GroupsMap<T>;

    if (!resultObj[itemKey]) {
      resultObj[itemKey] = [];
    }

    resultObj[itemKey].push(item);
  });

  return resultObj;
}

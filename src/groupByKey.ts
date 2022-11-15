type GroupsMap <T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const gropedByKey: GroupsMap<T> = {};

  items.forEach((item) => {
    const currrentKey = String(item[key]);

    if (gropedByKey[currrentKey]) {
      return gropedByKey[currrentKey].push(item);
    }

    gropedByKey[currrentKey] = [];

    return gropedByKey[currrentKey].push(item);
  });

  return gropedByKey;
}

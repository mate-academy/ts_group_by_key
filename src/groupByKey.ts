type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((item) => {
    const objKey = <string>item[key];

    if (!result.objKey) {
      result[objKey] = items.filter((i) => i[key] === item[key]);
    }
  });

  return result;
}

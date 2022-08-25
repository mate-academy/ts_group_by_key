type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((item) => {
    if (result[`${item[key]}`] === undefined) {
      result[`${item[key]}`] = [];
    }

    result[`${item[key]}`].push(item);
  });

  return result;
}

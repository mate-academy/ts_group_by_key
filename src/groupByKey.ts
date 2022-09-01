type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((item) => {
    const groupKeys = `${item[key]}`;

    if (!Object.prototype.hasOwnProperty.call(result, groupKeys)) {
      result[groupKeys] = [];
    }

    result[groupKeys].push(item);
  });

  return result;
}

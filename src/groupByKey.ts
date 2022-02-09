type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((item) => {
    const resultKey = `${item[key]}`;

    if (result[resultKey] === undefined) {
      result[resultKey] = [];
    }

    result[resultKey].push(item);
  });

  return result;
}

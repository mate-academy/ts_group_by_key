type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((item) => {
    const prop = String(item[key]);

    if (!result[prop]) {
      result[prop] = [];
    }

    result[prop].push(item);
  });

  return result;
}

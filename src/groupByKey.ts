type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((elem) => {
    const prop = String(elem[key]);

    if (!(prop in result)) {
      result[prop] = [];
    }

    result[prop].push(elem);
  });

  return result;
}

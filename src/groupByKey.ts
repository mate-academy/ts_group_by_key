type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const res: GroupsMap<T> = {};

  items.forEach((obj) => {
    const property = obj[key];

    if (typeof property !== 'string' && typeof property !== 'number') {
      throw new Error('Value of key for grouping should have type string');
    }

    if (!(property in res)) {
      res[property] = [];
    }
    res[property].push(obj);
  });

  return res;
}

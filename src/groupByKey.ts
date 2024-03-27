type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): Object {
  const result: GroupsMap<T> = {};

  items.forEach((item) => {
    const property = String(item[key]);

    if (!result[property]) {
      result[property] = [];
      result[property].push(item);
    } else {
      result[property].push(item);
    }
  });

  return result;
}

type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const obj: GroupsMap<T> = {};

  items.forEach((item) => {
    const property = String(item[key]);

    if (!obj[property]) {
      obj[property] = [];
    }

    obj[property].push(item);
  });

  return obj;
}

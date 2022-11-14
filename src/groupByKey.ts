type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const object: GroupsMap<T> = {};

  items.forEach((item) => {
    const property = String(item[key]);

    if (!object[property]) {
      object[property] = [];
    }

    return object[property].push(item);
  });

  return object;
}

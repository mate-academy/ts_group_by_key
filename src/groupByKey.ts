type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const collection: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const prop = String(item[key]);

    if (collection[prop] === undefined) {
      collection[prop] = [item];
    } else {
      collection[prop].push(item);
    }
  });

  return collection;
}

type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: string): GroupsMap<T> {
  const object: GroupsMap<T> = {};

  items.forEach((item: T) => {
    if (object[item[key]] === undefined) {
      object[item[key]] = [];
    }
    object[item[key]].push(item);
  });

  return object;
}

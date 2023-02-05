
type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const group:GroupsMap<T> = {};

  items.forEach((item) => {
    const keyForGroupElement = `${item[key]}`;

    if (!(keyForGroupElement in group)) {
      group[keyForGroupElement] = [];
    }

    group[keyForGroupElement].push(item);
  });

  return group;
}

type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const group: GroupsMap<T> = {};

  items.forEach((item) => {
    const keyForElement = `${item[key]}`;

    if (!(keyForElement in group)) {
      group[keyForElement] = [];
    }

    group[keyForElement].push(item);
  });

  return group;
}

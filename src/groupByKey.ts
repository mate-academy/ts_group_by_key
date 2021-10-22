type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return [...items].reduce((acc: GroupsMap<T>, el) => {
    const keyString = String(el[key]);

    if (!acc[keyString]) {
      acc[keyString] = [];
    }

    acc[keyString].push(el);

    return acc;
  }, {});
}

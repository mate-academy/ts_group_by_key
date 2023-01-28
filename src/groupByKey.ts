type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((acc: GroupsMap<T>, el) => {
    const mainKey = String(el[key]);

    if (acc[mainKey] === undefined) {
      acc[mainKey] = [];
    }

    acc[mainKey].push(el);

    return acc;
  }, {});
}

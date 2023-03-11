type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: string): GroupsMap<T> {
  return items.reduce((acc, obj) => {
    acc[obj[key]] = (acc[obj[key]] || []).concat(obj);

    return acc;
  }, {});
}

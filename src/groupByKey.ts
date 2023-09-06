type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((acc, obj) => {
    const value: string = String(obj[key]);
    // to String because value of obj[key] can be a number

    acc[value] = acc[value]
      ? acc[value]
      : [];

    acc[value].push(obj);

    return acc;
  }, {} as GroupsMap<T>);
}

type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const resultOfGrouping: GroupsMap<T> = {};

  items.forEach((item) => {
    const valueForGrouping = String(item[key]);

    if (resultOfGrouping[valueForGrouping]) {
      resultOfGrouping[valueForGrouping].push(item);
    } else {
      resultOfGrouping[valueForGrouping] = [item];
    }
  });

  return resultOfGrouping;
}

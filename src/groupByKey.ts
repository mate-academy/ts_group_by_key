type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const resultOfGrouping: GroupsMap<T> = {};

  items.forEach((item) => {
    const currentKey = `${item[key]}`;

    if (currentKey in resultOfGrouping) {
      resultOfGrouping[currentKey].push(item);
    } else {
      resultOfGrouping[currentKey] = [item];
    }
  });

  return resultOfGrouping;
}

type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const resultingMap: GroupsMap<T> = {};

  items.forEach((item) => {
    const groupValue = String(item[key]);

    if (!resultingMap[groupValue]) {
      resultingMap[groupValue] = [];
    }

    resultingMap[groupValue].push(item);
  });

  return resultingMap;
}

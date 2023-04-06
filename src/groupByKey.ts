type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const resultItem: GroupsMap<T> = {};

  items.forEach((item) => {
    const property = String(item[key]);

    if (!(property in resultItem)) {
      resultItem[property] = [];
    }

    resultItem[property].push(item);
  });

  return resultItem;
}

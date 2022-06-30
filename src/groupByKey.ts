type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const arrayGroupByKey: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const groupBy = String(item[key]);

    if (!arrayGroupByKey[groupBy]) {
      arrayGroupByKey[groupBy] = [];
    }

    arrayGroupByKey[groupBy].push(item);
  });

  return arrayGroupByKey;
}

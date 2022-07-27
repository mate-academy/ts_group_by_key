type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const resultGroup: GroupsMap<T> = {};

  items.forEach((item) => {
    const resultGroupKey = String(item[key]);

    if (!resultGroup[resultGroupKey]) {
      resultGroup[resultGroupKey] = [];
    }

    resultGroup[resultGroupKey].push(item);
  });

  return resultGroup;
}

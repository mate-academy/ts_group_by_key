type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T):GroupsMap<T> {
  const resultOfGroup: GroupsMap<T> = {};

  items.forEach((el) => {
    const field: string = String(el[key]);

    if (!(field in resultOfGroup)) {
      resultOfGroup[field] = [];
    }

    resultOfGroup[field].push({ ...el });
  });

  return resultOfGroup;
}

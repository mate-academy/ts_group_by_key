type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const sortObj: GroupsMap<T> = {};

  items.forEach((obj) => {
    const item = obj[key] as string;

    if (!sortObj[item]) {
      sortObj[item] = [];
    }

    sortObj[item].push(obj);
  });

  return sortObj;
}

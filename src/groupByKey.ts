type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const listObj: GroupsMap<T> = {};

  items.forEach((item) => {
    const listKey = item[key] as string;

    if (!(listKey in listObj)) {
      listObj[listKey] = [];
    }

    listObj[listKey].push(item);
  });

  return listObj;
}

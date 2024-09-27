type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items:T[], key: keyof T): GroupsMap<T> {
  const groupObjs: GroupsMap<T> = {};

  items.forEach((item, _index, array) => {
    const keyValue = item[key] as string;
    const filterAr = array.filter((objct) => objct[key] === keyValue);

    groupObjs[keyValue] = filterAr;
  });

  return groupObjs;
}

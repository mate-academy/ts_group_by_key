type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: T): GroupsMap<T> {
  const resultedObj: GroupsMap<T> = {};

  items.forEach((item: T) => {
    if (!resultedObj[item[key]]) {
      resultedObj[item[key]] = [];
    }

    resultedObj[item[key]].push(item);
  });

  return resultedObj;
}

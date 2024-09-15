type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((item) => {
    const value = String(item[key]);

    if (!result[value]) {
      result[value] = [];
    }

    result[value].push(item);
  });

  return result;
}

//  it is just to try do it with reduce
export function groupByKeyReduce<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((sortedObj: GroupsMap<T>, item): GroupsMap<T> => {
    const value = String(item[key]);

    if (!sortedObj[value]) {
      // eslint-disable-next-line no-param-reassign
      sortedObj[value] = [];
    }

    sortedObj[value].push(item);

    return sortedObj;
  }, {});
}

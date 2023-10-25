type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: string): GroupsMap<T> {
  const newObj: GroupsMap<T> = {};

  items.forEach((el, index, arr) => {
    const sort: T[] = arr.filter((otherBook) => otherBook[key] === el[key]);

    newObj[el[key]] = sort;
  });

  return newObj;
}

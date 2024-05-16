type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const sortedArr: GroupsMap<T> = {};

  items.forEach((item) => {
    const value = item[key] as string;

    if (!sortedArr[value]) {
      sortedArr[value] = [];
    }

    sortedArr[value].push(item);
  });

  return sortedArr;
}

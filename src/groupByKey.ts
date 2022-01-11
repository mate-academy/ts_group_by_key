
type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: string): GroupsMap<T> {
  // write code here;
  const sortResult: GroupsMap<T> = {};

  items.forEach((item) => {
    if (!sortResult[item[key]]) {
      sortResult[item[key]] = [];
    }

    sortResult[item[key]].push(item);
  });

  return sortResult;
}

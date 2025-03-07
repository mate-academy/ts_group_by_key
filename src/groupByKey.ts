type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: string): GroupsMap<T> {
  // write code here;
  const keyValues: string[] = [];
  const groupByResults: GroupsMap<T> = {};

  items.forEach((el: T) => {
    if (keyValues.indexOf(el[key]) === -1) {
      keyValues.push(el[key]);
    }
  });

  keyValues.forEach((el: string) => {
    groupByResults[el] = items.filter((item) => item[key] === el);
  });

  return groupByResults;
}

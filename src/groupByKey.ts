type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: any[], key: string): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((el: object) => {
    if (el[key] in result) {
      result[el[key]].push(el);
    } else {
      result[el[key]] = [el];
    }
  });

  return result;
}

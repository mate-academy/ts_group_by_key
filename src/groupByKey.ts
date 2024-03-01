type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((elem) => {
    if (!result[elem[key]]) {
      result[elem[key]] = [];
    }

    result[elem[key]].push(elem);
  });

  return result;
}

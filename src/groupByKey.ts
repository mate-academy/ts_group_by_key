type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: GroupsMap<T>[], key: keyof T): {} {
  return items.reduce((acc, val) => {
    acc[val[key]] = items.filter((obj): boolean => {
      return obj[key] === val[key];
    });

    return acc;
  }, {});
}

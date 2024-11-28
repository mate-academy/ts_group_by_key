type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items, key): GroupsMap<T>[] {
  // write code here;
  return items.reduce((acc, item) => {
    const add = items.filter((itemForFilter) => (
      item[key] === itemForFilter[key]
    ));

    return acc[item[key]]
      ? acc
      : {
        ...acc,
        [item[key]]: add,
      };
  }, {});
}

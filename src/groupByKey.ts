type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey <R>(items: R[], key: string): GroupsMap<R> {
  const grouppedItems: GroupsMap<R> = {};

  items.forEach((item) => {
    if (!Object.prototype.hasOwnProperty.call(grouppedItems, item[key])) {
      grouppedItems[item[key]]
        = items.filter((element) => item[key] === element[key]);
    }
  });

  return grouppedItems;
}

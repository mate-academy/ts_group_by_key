type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<I>(items: I[], key: keyof I): object {
  const groupedObj: GroupsMap<I> = {};

  items.forEach((item) => {
    const value = String(item[key]);

    if (!(value in groupedObj)) {
      groupedObj[value] = [];
    }

    groupedObj[value].push(item);
  });

  return groupedObj;
}

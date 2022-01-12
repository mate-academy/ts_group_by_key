type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<P>(items: P[], key: keyof P): GroupsMap<P> {
  const groupedData: GroupsMap<P> = {};

  items.forEach((item) => {
    if (!groupedData[item[key]]) {
      groupedData[item[key]] = [];
    }

    groupedData[item[key]].push(item);
  });

  return groupedData;
}

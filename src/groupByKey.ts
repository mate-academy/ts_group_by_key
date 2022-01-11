type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey(items: object[], key: string): GroupsMap<object> {
  const groupedData: GroupsMap<object> = {};

  items.forEach((item) => {
    if (!groupedData[item[key]]) {
      groupedData[item[key]] = [];
    }

    groupedData[item[key]].push(item);
  });

  return groupedData;
}

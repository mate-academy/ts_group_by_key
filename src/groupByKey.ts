type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: any[], key: keyof T): GroupsMap<T> {
  const values: string[] = [];
  const groupedData: GroupsMap<T> = {};

  items.forEach((item) => {
    if (!values.includes(item[key])) {
      values.push(item[key]);
    }
  });

  values.forEach((value) => {
    groupedData[value] = items.filter((item) => item[key] === value);
  });

  return groupedData;
}

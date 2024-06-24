type GroupsMap<T> = {
  [key: string | number]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedData: GroupsMap<T> = {};

  for (const item of items) {
    const value = `${item[key]}`;

    if (!groupedData.hasOwnProperty(value)) {
      groupedData[value] = [item];
    } else {
      groupedData[value].push(item);
    }
  }

  return groupedData;
}

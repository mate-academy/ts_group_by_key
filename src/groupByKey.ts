type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedList: GroupsMap<T> = {};

  items.forEach((item) => {
    const keyValue = <string>item[key];

    if (groupedList[keyValue]) {
      groupedList[keyValue].push(item);
    } else {
      groupedList[keyValue] = [item];
    }
  });

  return groupedList;
}

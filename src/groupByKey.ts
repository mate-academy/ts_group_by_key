type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedList: GroupsMap<T> = {};

  items.forEach((item) => {
    const sortingElement = String(item[key]);

    if (!(sortingElement in groupedList)) {
      groupedList[sortingElement] = [item];
    } else {
      groupedList[sortingElement].push(item);
    }
  });

  return groupedList;
}

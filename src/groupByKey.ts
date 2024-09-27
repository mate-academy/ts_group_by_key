
type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedElements: GroupsMap<T> = {};

  items.forEach((element) => {
    const keyValue = String(element[key]);

    if (!(keyValue in groupedElements)) {
      groupedElements[keyValue] = [];
    }
    groupedElements[keyValue].push(element);
  });

  return groupedElements;
}

type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: string): GroupsMap<T> {
  const groupedData: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const parameterToGoup: string = item[key];

    groupedData[parameterToGoup] = items.filter(
      (element: T) => element[key] === parameterToGoup,
    );
  });

  return groupedData;
}

type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedObj: GroupsMap<T> = {};

  items.forEach((element: T) => {
    const property: string = String(element[key]);

    if (!groupedObj[property]) {
      groupedObj[property] = [element];
    } else {
      groupedObj[property].push(element);
    }
  });

  return groupedObj;
}

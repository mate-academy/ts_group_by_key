type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedObj: GroupsMap<T> = {};

  items.forEach((el: T) => {
    const elementValue = String(el[key]);

    if (groupedObj[elementValue]) {
      groupedObj[elementValue].push(el);
    } else {
      groupedObj[elementValue] = [el];
    }
  });

  return groupedObj;
}

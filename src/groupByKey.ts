type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedObj: GroupsMap<T> = {};

  items.forEach((obj: T) => {
    const property: string = `${obj[key]}`;

    if (!groupedObj[property]) {
      groupedObj[property] = [obj];
    } else {
      groupedObj[property].push(obj);
    }
  });

  return groupedObj;
}

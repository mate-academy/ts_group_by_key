type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const sortObj: GroupsMap<T> = {};

  items.forEach((element: T) => {
    const newKey = String(element[key]);

    if (Object.prototype.hasOwnProperty.call(sortObj, newKey)) {
      sortObj[newKey].push(element);
    } else {
      sortObj[newKey] = [element];
    }
  });

  return sortObj;
}

type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedObj: GroupsMap<T> = {};

  items.forEach((item) => {
    const keyObj = String(item[key]);

    if (keyObj in groupedObj) {
      groupedObj[keyObj].push(item);
    } else {
      groupedObj[keyObj] = [item];
    }
  });

  return groupedObj;
}

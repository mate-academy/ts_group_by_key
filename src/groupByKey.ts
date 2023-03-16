type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const resultObj: GroupsMap<T> = {};

  items.forEach((item) => {
    const keyObj: string = String(item[key]);

    if (keyObj in resultObj) {
      resultObj[keyObj].push(item);
    } else {
      resultObj[keyObj] = [item];
    }
  });

  return resultObj;
}

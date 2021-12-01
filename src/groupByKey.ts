type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const resObj: GroupsMap<T> = {};

  items.forEach((item) => {
    const keyOfResObj = String(item[key]);

    if (!resObj[keyOfResObj]) {
      resObj[keyOfResObj] = [];
    }

    resObj[keyOfResObj].push(item);
  });

  return resObj;
}

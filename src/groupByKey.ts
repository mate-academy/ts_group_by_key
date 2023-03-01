type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const resObj: GroupsMap<T> = {};

  items.forEach((item) => {
    const keyForElement = `${item[key]}`;

    if (!resObj[keyForElement]) {
      resObj[keyForElement] = [];
    }

    resObj[keyForElement].push(item);
  });

  return resObj;
}

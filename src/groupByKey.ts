type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const resObj: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const keyOfItem = item[key] as string;

    if (resObj[keyOfItem]) {
      resObj[keyOfItem].push(item);
    } else {
      resObj[keyOfItem] = [item];
    }
  });

  return resObj;
}

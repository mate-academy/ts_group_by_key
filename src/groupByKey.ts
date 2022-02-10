type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items:T[], key:keyof T):GroupsMap<T> {
  const obj:GroupsMap<T> = {};

  items.forEach((item:T) => {
    const keyOfItem:any = item[key];

    if (!(keyOfItem in obj)) {
      obj[keyOfItem] = [];
    }
    obj[keyOfItem].push(item);
  });

  return obj;
}

type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((result:GroupsMap<T>, item: T) => {
    const myResult = result;

    if (myResult[String(item[key])] === undefined) {
      myResult[String(item[key])] = [];
    }
    myResult[String(item[key])].push(item);

    return myResult;
  }, {});
}

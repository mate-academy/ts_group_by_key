type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((obj: GroupsMap<T>, item) => {
    const itemKey = String(item[key]);
    const objLink = obj;

    if (!objLink[itemKey]) {
      objLink[itemKey] = [];
    }

    objLink[itemKey].push(item);

    return objLink;
  }, {});
}

type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((objGroup: GroupsMap<T>, obj: T) => {
    const objKey: string = String(obj[key]);
    const result = objGroup;

    if (objKey in result) {
      result[objKey].push(obj);
    } else {
      result[objKey] = [obj];
    }

    return result;
  }, {});
}

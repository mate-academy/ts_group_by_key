type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((res: GroupsMap<T>, obj: T) => {
    const k = obj[key];
    const result: GroupsMap<T> | any = { ...res };

    if (!result[k]) {
      result[k] = [];
    }

    result[k].push(obj);

    return result;
  }, {});
}

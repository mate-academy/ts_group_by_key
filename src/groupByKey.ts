type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((res: GroupsMap<T>, obj: T) => {
    const k = String(obj[key]);
    const result: GroupsMap<T> = { ...res };

    if (!result[k]) {
      result[k] = [];
    }

    result[k].push(obj);

    return result;
  }, {});
}

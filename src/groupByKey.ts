type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((res: GroupsMap<T>, obj: T) => {
    const newKey = String(obj[key]);
    const result: GroupsMap<T> = { ...res };

    if (!result[newKey]) {
      result[newKey] = [];
    }

    result[newKey].push(obj);

    return result;
  }, {});
}

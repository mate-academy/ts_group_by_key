type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((acc, val) => {
    const result = { ...acc };
    const value = val[key] as string;

    if (!result[value]) {
      result[value] = [];
    }

    result[value].push(val);

    return result;
  }, {} as GroupsMap<T>);
}

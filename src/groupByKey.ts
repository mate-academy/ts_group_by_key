type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce<GroupsMap<T>>((result, currentValue) => {
    const objKey = currentValue[key] as string;

    if (!result[objKey]) {
      result[objKey] = [];
    }

    result[objKey].push(currentValue);

    return result;
  }, {});
}

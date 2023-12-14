type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(
  items: T[],
  key: keyof T,
): GroupsMap<T> {
  return items.reduce((acc: GroupsMap<T>, item: T) => {
    const group = String(item[key]);
    const result = { ...acc };

    if (!result[group]) {
      result[group] = [];
    }

    result[group].push(item);

    return result;
  }, {});
}

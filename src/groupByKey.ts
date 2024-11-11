type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T extends object>(
  items: T[],
  key: keyof T,
): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((element) => {
    const stringKey = String(element[key]);

    if (Object.prototype.hasOwnProperty.call(result, stringKey)) {
      result[stringKey].push(element);
    } else {
      result[stringKey] = [element];
    }
  });

  return result;
}

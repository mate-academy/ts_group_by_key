type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T extends { [key: string]: number | string }>(
  items: T[],
  key: string,
): GroupsMap<T> {
  return items.reduce((result: GroupsMap<T>, item: T) => {
    if (
      item[key] &&
      (typeof item[key] === 'string' || typeof item[key] === 'number')
    ) {
      if (!result[item[key]]) {
        result[item[key]] = [];
      }

      result[item[key]].push(item);
    }

    return result;
  }, {});
}

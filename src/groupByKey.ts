type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(
  items: T[],
  key: keyof T,
): GroupsMap<T> {
  const preparedGroupedMap: GroupsMap<T> = items.reduce(
    (resultObj, item) => {
      const valueToGroup = item[key] as string;
      const actualResultObj: GroupsMap<T> = { ...resultObj };

      if (!actualResultObj[valueToGroup]) {
        actualResultObj[valueToGroup] = [];
      }

      actualResultObj[valueToGroup].push(item);

      return actualResultObj;
    },
    {},
  );

  return preparedGroupedMap;
}

type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey(
  items: any[],
  key: string,
): GroupsMap<(typeof items)[0]> {
  const preparedGroupedMap: GroupsMap<(typeof items)[0]> = items.reduce(
    (resultObj, item) => {
      const valueToGroup = item[key];
      const actualResultObj = { ...resultObj };

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

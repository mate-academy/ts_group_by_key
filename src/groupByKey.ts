type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<I>(items: I[], key: keyof I): object {
  let groupKeys = items.map((item: I) => item[key]);

  groupKeys
    = groupKeys
      .filter((value, index: number) => groupKeys.indexOf(value) === index);

  const maps
    = groupKeys
      .map((groupKey) => {
        const map: GroupsMap<I>
          = {
            [`${groupKey}`]: items.filter((item : I) => item[key] === groupKey),
          };

        return map;
      });

  const result = {};

  maps.forEach((map) => Object.assign(result, map));

  return result;
}

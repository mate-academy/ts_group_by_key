type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T, K extends keyof T>(items: T[], key:K)
  : GroupsMap<T> {
  type GroupsMapKey = keyof GroupsMap<T>;

  const result = items.reduce((prev, item) => {
    const valueOfKey = <GroupsMapKey>item[key];
    const itemsByValueKey = items.filter((filterItem) => {
      return filterItem[key] === item[key];
    });
    const obj:GroupsMap<T> = {};

    obj[valueOfKey] = itemsByValueKey;

    return {
      ...prev,
      ...obj,
    };
  }, {});

  return result;
}

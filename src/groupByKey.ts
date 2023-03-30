type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey(items: object[], key: string): GroupsMap<object> {
  const finalObj: GroupsMap<object> = {};

  const names = items.map((item) => {
    const index = Object.keys(item).indexOf(key);
    const value = Object.values(item)[index];

    return value;
  });

  names.forEach((name) => {
    if (!finalObj[name]) {
      finalObj[name] = items.filter((item) => item[key] === name);
    }
  });

  return finalObj;
}

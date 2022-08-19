type GroupsMap<T> = {
  [key: string]: T[];
};

// eslint-disable-next-line max-len
export function groupByKey(items: object[], key: keyof object): GroupsMap<object> {
  const result: GroupsMap<object> = {};

  // eslint-disable-next-line no-restricted-syntax
  for (const obj of items) {
    if (obj[key] in result) {
      result[obj[key]].push(obj);
    } else {
      result[obj[key]] = [obj];
    }
  }

  return result;
}

type GroupsMap<T> = {
  [key: string]: T[];
};

// eslint-disable-next-line max-len
export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  // eslint-disable-next-line no-restricted-syntax
  for (const obj of items) {
    if (`${obj[key]}` in result) {
      result[`${obj[key]}`].push(obj);
    } else {
      result[`${obj[key]}`] = [obj];
    }
  }

  return result;
}

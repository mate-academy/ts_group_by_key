type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};
  const keys: string[] = [];

  items.forEach((item) => {
    if (!(key in keys)) {
      keys.push(String(item[key]));
    }
  });

  keys.forEach((keyOfResult) => {
    result[keyOfResult] = [];

    items.forEach((item) => {
      if (String(item[key]) === keyOfResult) {
        result[keyOfResult].push(item);
      }
    });
  });

  return result;
}

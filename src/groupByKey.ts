type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((item) => {
    const currentKey = String(item[key]);

    // eslint-disable-next-line no-prototype-builtins
    if (!result.hasOwnProperty(currentKey)) {
      result[currentKey] = [item];
    } else {
      result[currentKey].push(item);
    }
  });

  return result;
}

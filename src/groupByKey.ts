type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((item) => {
    const value = String(item[key]);

    // eslint-disable-next-line no-prototype-builtins
    if (!result.hasOwnProperty(value)) {
      result[value] = [];
    }
    result[value].push(item);
  });

  return result;
}

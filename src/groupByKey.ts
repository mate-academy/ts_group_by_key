type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};
  const values: T[keyof T][] = [];

  function filterBy(elements: T[], value: T[keyof T]): T[] {
    return [...elements].filter((item) => item[key] === value);
  }

  items.forEach((item) => {
    if (values.indexOf(item[key]) === -1) {
      values.push(item[key]);
    }
  });

  values.forEach((value) => {
    result[String(value)] = filterBy(items, value);
  });

  return result;
}

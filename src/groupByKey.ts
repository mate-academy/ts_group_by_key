type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T extends Object>(items: T[], key: keyof T)
  : GroupsMap<T> {
  const values = items.map((item) => String(item[key]));

  return values.reduce((prev, value) => {
    const validItems = items
      .filter((item) => Object.values(item)
        .map((objValue) => String(objValue)).includes(value));

    return {
      ...prev,
      [value]: validItems,
    };
  }, {});
}

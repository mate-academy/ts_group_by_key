type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: Array<T>, key: keyof T): GroupsMap<T> {
  const keyValues = items.map((el) => el[key]);

  const groupedElements = keyValues.reduce((filterObject, keyValue) => {
    const object: GroupsMap<T> = Object.assign(filterObject, {
      [keyValue]: items.filter((el) => el[key] === keyValue),
    });

    return object;
  }, {});

  return groupedElements;
}

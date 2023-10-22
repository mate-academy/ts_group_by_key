type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey
<T extends Record<string, any>>(items: T[], key: string): GroupsMap<T> {
  const object = items.reduce((acc, curr) => {
    const filter = items.filter((item) => item[key] === curr[key]);

    return {
      ...acc,
      [curr[key]]: filter,
    };
  }, {});

  return object;
}

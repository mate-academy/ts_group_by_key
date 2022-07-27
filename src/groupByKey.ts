type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const data = items.reduce((acc, element) => {
    const newKey = element[key];
    const fitredOfKey = items
      .filter((item): boolean => item[key] === newKey);

    return {
      ...acc,
      [`${newKey}`]: fitredOfKey,
    };
  }, {});

  return data;
}

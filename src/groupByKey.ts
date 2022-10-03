type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: [], key: string): GroupsMap<T> {
  const copyItems = [...items];

  const outputObject = copyItems.reduce((prev: GroupsMap<T>, object) => {
    return {
      ...prev,
      [object[key]]: copyItems.filter((item) => item[key] === object[key]),
    };
  }, {});

  return outputObject;
}

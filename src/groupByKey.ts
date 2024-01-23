type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey(items: [], key: string): GroupsMap<typeof items> {
  const result: GroupsMap<typeof items> = {};

  items.map((item) => {
    if (!result[item[key]]) {
      result[item[key]] = [];
    }

    Object.keys(item).forEach((k) => {
      if (k === key) {
        result[item[key]].push(item);
      }
    });

    return result;
  });

  return result;
}

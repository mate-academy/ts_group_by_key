type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey(items: [], key: string):
GroupsMap<typeof items> {
  const obj: GroupsMap<typeof items> = {};

  items.map((item) => {
    obj[item[key]] = [];

    return obj;
  });

  items.map((item) => {
    Object.keys(item).forEach((k) => {
      if (k === key) {
        obj[item[key]].push(item);
      }
    });

    return obj;
  });

  return obj;
}

type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<F>(items: F[], key: keyof F): GroupsMap<F> {
  const groupsMap = items
    .reduce((resultObj: GroupsMap<F>, elem: F): GroupsMap<F> => {
      const obj = { ...resultObj };

      if (!resultObj[elem[key]]) {
        obj[elem[key]] = [];
      }

      obj[elem[key]].push(elem);

      return obj;
    }, {});

  return groupsMap;
}

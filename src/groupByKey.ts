type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<F>(items: F[], key: string): GroupsMap<F> {
  const sort = items.reduce((prev, elem: F): GroupsMap<F> => {
    const obj = { ...prev };

    if (!prev[elem[key]]) {
      obj[elem[key]] = [];
    }

    obj[elem[key]].push(elem);

    return obj;
  }, {});

  return sort;
}

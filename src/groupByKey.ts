type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<K>(items: K[], key: keyof K): GroupsMap<K> {
  // write code here;
  return items.reduce((acc: GroupsMap<K>, el) => {
    if (!acc[String(el[key])]) {
      acc[String(el[key])] = [];
    }

    acc[String(el[key])].push(el);

    return {
      ...acc,
    };
  }, {});
}

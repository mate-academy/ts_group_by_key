type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<I extends Object>(items: I[], key: string)
  : GroupsMap<I> {
  const result: GroupsMap<I> = {};

  items.forEach((item: any) => {
    const c = item[key];

    if (c in result) {
      result[c].push(item);
    } else {
      result[c] = [item];
    }
  });

  return result;
}

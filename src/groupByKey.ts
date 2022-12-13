type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<R>(
  items: R[],
  key: string,
): GroupsMap<R> {
  const group: GroupsMap<R> = {};

  items.forEach((el: R) => {
    if (el[key] in group) {
      group[el[key]].push(el);
    } else {
      group[el[key]] = [el];
    }
  });

  return group;
}

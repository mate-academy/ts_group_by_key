type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<R>(
  items: R[],
  key: keyof R,
): GroupsMap<R> {
  return items.reduce((acc: GroupsMap<R>, el: R) => {
    if (el[key] in acc) {
      acc[el[key]].push(el);
    } else {
      acc[el[key]] = [el];
    }

    return acc;
  }, {});
}

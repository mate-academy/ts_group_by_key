type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<R>(
  items: R[],
  key: keyof R,
): GroupsMap<R> {
  return items.reduce((acc: GroupsMap<R>, item: R) => {
    const groupKey = `${item[key]}`;
    const groups = { ...acc };

    groups[groupKey] = (groups[groupKey] || []).concat(item);

    return groups;
  }, {});
}

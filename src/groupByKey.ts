type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<R>(
  items: R[],
  key: keyof R,
): GroupsMap<R> {
  return items.reduce((acc: GroupsMap<R>, item: R) => {
    const groupKey:string = `${item[key]}`;
    const groups = { ...acc };

    if (groups[groupKey]) {
      groups[groupKey].push(item);
    } else {
      groups[groupKey] = [item];
    }

    return groups;
  }, {});
}

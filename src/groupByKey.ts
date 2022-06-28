type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey(
  items: Array<object>,
  key: keyof object,
): GroupsMap<object> {
  const sortedBy: GroupsMap<object> = {};

  items.forEach((item) => {
    const value = item[key];

    if (sortedBy[value]) {
      sortedBy[value].push(item);
    } else {
      sortedBy[value] = [item];
    }
  });

  return sortedBy;
}

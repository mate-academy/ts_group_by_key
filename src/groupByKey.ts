type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<S>(items: S[], key: keyof S): GroupsMap<S> {
  const groupedResult: GroupsMap<S> = {};

  items.forEach((item) => {
    const groupKey = String(item[key]);

    groupedResult[groupKey] = [...(groupedResult[groupKey] || []), item];
  });

  return groupedResult;
}

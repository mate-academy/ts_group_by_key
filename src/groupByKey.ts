type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey(items: object[], key: string): GroupsMap<object> {
  const mappedGroup: GroupsMap<object>
  = items.reduce((groups: GroupsMap<object>, item) => ({
    ...groups,
    [item[key]]: [...(groups[item[key]] || []), item],
  }), {});

  return mappedGroup;
}

type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<I>(
  items: I[],
  key: keyof I,
): GroupsMap<I> {
  const groupList: GroupsMap<I> = {};

  items.forEach((item) => {
    const listKey = String(item[key]);

    if (!groupList[listKey]) {
      groupList[listKey] = [];
    }
    groupList[listKey].push(item);
  });

  return groupList;
}

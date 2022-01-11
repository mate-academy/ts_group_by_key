type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<I>(
  items: I[],
  key: keyof I,
): GroupsMap<I> {
  const groupList: GroupsMap<I> = {};

  items.forEach((el) => {
    const listKey: string = `${el[key]}`;

    if (!groupList[listKey]) {
      groupList[listKey] = [];
    }
    groupList[listKey].push(el);
  });

  return groupList;
}

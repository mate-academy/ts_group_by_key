type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: string): GroupsMap<T> {
  const newObjItems: GroupsMap<T> = {};

  items.forEach((item) => {
    const groupsBy = String(item[key]);

    if (!newObjItems[groupsBy]) {
      newObjItems[groupsBy] = [];
    }
    newObjItems[groupsBy].push(item);
  });

  return newObjItems;
}

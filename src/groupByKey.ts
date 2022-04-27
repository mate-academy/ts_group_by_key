type GroupsMap<T> = {
  [key: string | number]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce<GroupsMap<T>>((group, item) => {
    const groupMap:GroupsMap<T> = group;
    const keyValue = String(item[key]);

    if (groupMap[keyValue]) {
      groupMap[keyValue].push(item);
    } else {
      groupMap[keyValue] = [item];
    }

    return groupMap;
  }, {});
}

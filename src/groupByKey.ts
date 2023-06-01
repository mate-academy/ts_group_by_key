type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupMap: GroupsMap<T> = {};

  items.forEach((item) => {
    const valueSort: string = item[key].toString();

    if (!groupMap[valueSort]) {
      groupMap[valueSort] = [];
    }

    groupMap[valueSort].push(item);
  });

  return groupMap;
}

type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupMap: GroupsMap<T> = {};

  items.forEach((el: T) => {
    const group = `${el[key]}`;

    if (!groupMap[group]) {
      groupMap[group] = [];
    }

    groupMap[group].push(el);
  });

  return groupMap;
}

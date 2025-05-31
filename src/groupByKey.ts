type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey(items: any[], key: string): GroupsMap<any> {
  const groups: GroupsMap<(typeof items)[0]> = {};

  items.forEach((item) => {
    const group = item[key];

    if (groups[group]) {
      groups[group].push(item);
    } else {
      groups[group] = [item];
    }
  });

  return groups;
}

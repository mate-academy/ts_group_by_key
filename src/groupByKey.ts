type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: string): GroupsMap<T> {
  return items.reduce((group, item: T) => {
    if (group[item[key]]) {
      group[item[key]].push(item);
    } else {
      group[item[key]] = [item];
    }

    return group;
  }, {});
}

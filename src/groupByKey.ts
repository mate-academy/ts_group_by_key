type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: string): GroupsMap<T> {
  // write code here;
  return items.reduce((groups: GroupsMap<T>, item: T) => {
    if (!(item[key] in groups)) {
      groups[item[key]] = [];
    }

    groups[item[key]].push(item);

    return groups;
  }, {});
}

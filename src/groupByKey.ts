type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey(items, key): object {
  const groups: GroupsMap<string> = {};

  for (const item of items) {
    if (!groups.hasOwnProperty(item[key])) {
      groups[item[key]] = [];
    }

    groups[item[key]].push(item);
  }

  return groups;
}

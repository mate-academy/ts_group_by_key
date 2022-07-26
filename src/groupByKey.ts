type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey(items: any[], key: string): GroupsMap<object> {
  const grouped: GroupsMap<object> = {};

  items.forEach((element) => {
    if (element[key] in grouped) {
      grouped[element[key]].push(element);
    } else {
      grouped[element[key]] = [element];
    }
  });

  return grouped;
}

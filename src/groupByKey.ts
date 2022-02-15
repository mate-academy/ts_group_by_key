
type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey(items: [], key: string): GroupsMap<object> {
  if (items.length === 0) {
    return {};
  }

  return items.reduce((prev: GroupsMap<object>, current) => {
    if (current[key] in prev) {
      prev[current[key]].push(current);
    } else {
      // eslint-disable-next-line no-param-reassign
      prev[current[key]] = [current];
    }

    return prev;
  }, {});
}

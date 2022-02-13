/* eslint-disable prefer-arrow-callback */
type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey(items: [], key: string): GroupsMap<object> {
  if (items.length === 0) {
    return {};
  }

  // eslint-disable-next-line func-names
  return items.reduce((prev, current) => {
    // eslint-disable-next-line no-param-reassign
    (prev[current[key]] = prev[current[key]] || []).push(current);

    return prev;
  }, {});
}

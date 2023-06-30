
type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey(items: string[], key: number): GroupsMap<string> {
  const sorted: GroupsMap<string> = {};

  items.forEach((item) => {
    const value = item[key];

    if (value in sorted) {
      sorted[value] = [...sorted[value], item];
    } else {
      sorted[value] = [item];
    }
  });

  return sorted;
}

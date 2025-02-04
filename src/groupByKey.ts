type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: string): GroupsMap<T> {
  const group: GroupsMap<T> = {};
  const copy = [...items];

  items.map((item) => {
    group[item[key]] = copy.filter((i) => i[key] === item[key]);
  });

  return group;
}

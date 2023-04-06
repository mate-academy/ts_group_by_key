type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((acc: GroupsMap<T>, curr) => {
    const currStr = String(curr[key]);
    const group = currStr;

    if (!(group in acc)) {
      acc[group] = [];
    }
    acc[group].push(curr);

    return acc;
  }, {});
}

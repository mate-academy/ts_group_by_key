type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((acc: GroupsMap<T>, curr: T) => {
    if (acc[String(curr[key])]) {
      acc[String(curr[key])] = [];
    }
    acc[String(curr[key])].push(curr);

    return acc;
  }, {});
}

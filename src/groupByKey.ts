type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((acc: GroupsMap<T>, curr: T) => {
    const currentKey = curr[key] as keyof GroupsMap<T>;

    if (!acc[currentKey]) {
      acc[currentKey] = [];
    }
    acc[currentKey].push(curr);

    return acc;
  }, {});
}

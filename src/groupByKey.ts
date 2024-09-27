type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const group = items.reduce((acc: GroupsMap<T>, next: T) => {
    const itemKey = next[key] as string;

    if (!acc[itemKey]) {
      acc[itemKey] = [next];
    } else {
      acc[itemKey].push(next);
    }

    return acc;
  }, {});

  return group;
}

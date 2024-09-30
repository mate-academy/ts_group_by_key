type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((acc, el) => {
    const keyGroup = String(el[key]);

    if (!acc[keyGroup]) {
      acc[keyGroup] = [];
    }

    acc[keyGroup].push(el);

    return acc;
  }, {} as GroupsMap<T>);
}

type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((accumulator, item) => {
    const group = String(item[key]);

    if (!accumulator[group]) {
      accumulator[group] = [];
    }

    accumulator[group].push(item);

    return accumulator;
  }, {} as GroupsMap<T>);
}

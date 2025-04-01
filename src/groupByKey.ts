type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((accumulator, current) => {
    const groupKey = String(current[key]);

    (accumulator[groupKey] ??= []).push(current);

    return accumulator;
  }, {} as GroupsMap<T>);
}

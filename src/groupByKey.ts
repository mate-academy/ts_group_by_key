type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((accumulator, current) => {
    accumulator[current[key]] = accumulator[current[key]] || [];
    accumulator[current[key]].push(current);

    return accumulator;
  }, Object.create(null));
}

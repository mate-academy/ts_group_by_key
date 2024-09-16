type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(arr: T[], key: keyof T):GroupsMap<T> {
  return arr.reduce((acc:GroupsMap<T>, curr:T) => {
    const groupKey = curr[key] as string;

    if (acc[groupKey]) {
      acc[groupKey].push(curr);
    } else {
      acc[groupKey] = [curr];
    }

    return acc;
  }, {});
}

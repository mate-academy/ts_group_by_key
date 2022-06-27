type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items:T[], key: keyof T):GroupsMap<T> {
  return items.reduce((accumulator, val) => {
    const groupedKey = val[key];

    if (!accumulator[groupedKey]) {
      accumulator[groupedKey] = [];
    }
    accumulator[groupedKey].push(val);

    return accumulator;
  }, {} as any);
}

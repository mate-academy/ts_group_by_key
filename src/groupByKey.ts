type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items:T[], key: keyof T):GroupsMap<T> {
  const seed:GroupsMap<T> = {};

  return items.reduce((accumulator, item) => {
    const groupName:string = String(item[key]);

    if (!(groupName in accumulator)) {
      accumulator[groupName] = [];
    }

    accumulator[groupName].push(item);

    return accumulator;
  }, seed);
}

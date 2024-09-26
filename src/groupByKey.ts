type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((total: GroupsMap<T>, next) => {
    const trueTotal = total;
    const trueNext = next[key] as string;

    if (!trueTotal[trueNext]) {
      trueTotal[trueNext] = [];
    }

    trueTotal[trueNext].push(next);

    return trueTotal;
  }, {});
}

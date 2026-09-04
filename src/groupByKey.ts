type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: Object[], key: string): GroupsMap<T> {
  return items.reduce((previous: any, current: any) => {
    const previousCopy = { ...previous };

    if (!previousCopy[current[key]]) {
      previousCopy[current[key]] = [];
    }

    previousCopy[current[key]].push(current);

    return previousCopy;
  }, {});
}

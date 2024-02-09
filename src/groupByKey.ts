type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items : T[], key : keyof T) : GroupsMap<T> {
  const solution : GroupsMap<T> = {};

  items.forEach((item) => {
    const valueOfKey : string = String(item[key]);

    if (!solution[valueOfKey]) {
      solution[valueOfKey] = [];
    }

    solution[valueOfKey].push(item);
  });

  return solution;
}

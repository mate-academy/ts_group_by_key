type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  // write code here;
  return items.reduce((grops, item) => {
    const keyValue = String(item[key]);

    if (!grops[keyValue]) {
      grops[keyValue] = [];
    }

    grops[keyValue].push(item);

    return grops;
  }, {} as GroupsMap<T>);
}

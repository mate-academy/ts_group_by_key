type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((acc, item) => {
    // Convert the value to a string to safely use it as an object property key
    const group = String(item[key]);

    if (!acc[group]) {
      acc[group] = [];
    }
    acc[group].push(item);

    return acc;
  }, {} as GroupsMap<T>);
}

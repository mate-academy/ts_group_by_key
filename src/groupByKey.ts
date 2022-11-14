type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedObj = items.reduce((acc: GroupsMap<T>, curr) => {
    const currentKey: string = curr[key];

    if (!acc[currentKey]) {
      acc[currentKey] = [curr];
    } else {
      acc[currentKey].push(curr);
    }

    return acc;
  }, {});

  return groupedObj;
}

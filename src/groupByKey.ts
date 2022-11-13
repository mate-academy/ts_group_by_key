type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedObj = items.reduce((acc, curr) => {
    if (!acc[curr[key]]) {
      acc[curr[key]] = [curr];
    } else {
      acc[curr[key]].push(curr);
    }

    return acc;
  }, {});

  return groupedObj;
}

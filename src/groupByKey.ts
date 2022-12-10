type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T, K extends keyof T>(items: T[], key: K)
  : GroupsMap<T> {
  const groupedObj: GroupsMap<T> = {};

  items.forEach((item) => {
    const newKey: unknown = item[key];

    if (!groupedObj[<string>newKey]) {
      groupedObj[<string>newKey] = [];
    }

    groupedObj[<string>newKey].push(item);
  });

  return groupedObj;
}

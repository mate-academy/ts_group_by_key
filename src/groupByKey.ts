type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey(items: string[], key: number): object {
  return items.reduce((acc: GroupsMap<string>, obj: string) => {
    const keys = obj[key];

    if (!acc[keys]) {
      acc[keys] = [];
    }

    acc[keys].push(obj);

    return acc;
  }, {});
}

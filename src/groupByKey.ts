type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T, K extends keyof T>(items: T[], key: K)
  : GroupsMap<T> {
  return items.reduce((prev, current) => {
    const newKey: unknown = current[key];

    return {
      ...prev,
      [newKey as string]: items.filter((object) => object[key]
        === current[key]),
    };
  }, {});
}

type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T, K extends keyof T>(items: T[], key: K)
  : GroupsMap<T> {
  return items.reduce((prev, current) => {
    const thisKey = [current[key]];

    return {
      ...prev,
      [thisKey as any]: items.filter((object) => object[key] === current[key]),
    };
  }, {});
}

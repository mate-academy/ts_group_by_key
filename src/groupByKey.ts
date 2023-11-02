type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((prev: GroupsMap<T>, curent: T) => {
    const stringKey = curent[key] as string;

    return {
      ...prev,
      [stringKey]: prev[stringKey]
        ? [...prev[stringKey], curent]
        : [curent],
    };
  }, {});
}

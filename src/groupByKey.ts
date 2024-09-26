type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((prev, item) => {
    const keyValue = String(item[key]);

    return Object.assign(
      prev,
      {
        [keyValue]: prev[keyValue]
          ? [...prev[keyValue], item]
          : [item],
      },
    );
  }, {} as GroupsMap<T>);
}

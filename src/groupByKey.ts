type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((grouped, item) => {
    const keyValue = item[key] as string;

    if (!grouped[keyValue]) {
      grouped[keyValue] = [];
    }

    grouped[keyValue].push(item);

    return { ...grouped };
  }, {} as GroupsMap<T>);
}

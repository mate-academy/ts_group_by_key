type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = items.reduce((acc, cur) => {
    const value = cur[key] as string;

    if (acc[value]) {
      acc[value] = [...acc[value], cur];
    } else {
      acc[value] = [cur];
    }

    return acc;
  }, {} as GroupsMap<T>);

  return result;
}

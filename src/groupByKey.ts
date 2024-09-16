type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((result, current) => {
    const groupField = current[key] as string;

    if (!result[groupField]) {
      // eslint-disable-next-line no-param-reassign
      result[groupField] = [];
    }

    result[groupField].push(current);

    return result;
  }, {} as GroupsMap<T>);
}

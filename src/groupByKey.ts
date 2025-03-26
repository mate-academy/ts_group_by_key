type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((item) => {
    const writeKey: string = item[key] as string;

    result[writeKey] = items.filter((member) => member[key] === writeKey);
  });

  return result;
}

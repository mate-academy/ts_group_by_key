type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce(
    (acc: GroupsMap<T>, obj: T) => {
      const keyValue = obj[key] as string;

      if (!(acc[keyValue])) {
        acc[keyValue] = [];
      }

      acc[keyValue].push(obj);

      return acc;
    }, {},
  );
}

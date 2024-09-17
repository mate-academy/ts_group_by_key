type GroupsMap<T> = {
  [key: string]: T[];
};

export const groupByKey
  = <T>(items: T[], key: keyof T) : GroupsMap<T> => items.reduce(
    (acc: GroupsMap<T>, item: T) => {
      const keyValue = item[key] as string;

      if (!acc[keyValue]) {
        acc[keyValue] = [];
      }

      acc[keyValue].push(item);

      return acc;
    }, {},
  );

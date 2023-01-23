type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = { };

  items.forEach((item) => {
    const keyOfResult = item[key] as string;

    if (!result[keyOfResult]) {
      result[keyOfResult] = [];
    }

    result[keyOfResult].push(item);
  });

  return result;
}

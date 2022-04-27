type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((element) => {
    const resultKey:string = String(element[key]);

    if (!result[resultKey]) {
      result[resultKey] = [];
    }

    result[resultKey].push(element);
  });

  return result;
}

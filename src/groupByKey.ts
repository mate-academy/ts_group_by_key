type GroupsMap<T> = {
  [key: string]: T[];
};

type T = {
  [key: string]: any;
};

export function groupByKey(items: T[], key: string): GroupsMap<T> {
  const groupedElements: GroupsMap<T> = {};

  const keyValues: string[] = [...items].map((el) => el[key]);

  keyValues.forEach((keyValue) => {
    const result: T[] = [...items].filter((el) => el[key] === keyValue);

    groupedElements[keyValue] = result;
  });

  return groupedElements;
}

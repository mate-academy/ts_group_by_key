type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const objectResult: GroupsMap<T> = {};

  items.forEach((element: T): void => {
    const item: string = String(element[key]);

    if (!objectResult[item]) {
      objectResult[item] = [];
    }

    objectResult[item].push(element);
  });

  return objectResult;
}

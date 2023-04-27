type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const objectResult: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const keyOfItem: any = item[key];

    if (!(keyOfItem in objectResult)) {
      objectResult[keyOfItem] = [];
    }

    objectResult[keyOfItem].push(item);
  });

  return objectResult;
}

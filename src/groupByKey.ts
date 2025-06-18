type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedResult: GroupsMap<T> = {};

  for (const item of items) {
    const keyValue: string = String(item[key]);

    if (groupedResult[keyValue]) {
      groupedResult[keyValue].push(item);
    } else {
      groupedResult[keyValue] = [item];
    }
  }

  return groupedResult;
}

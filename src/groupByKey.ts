type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedResult: GroupsMap<T> = {};

  for (const item of items) {
    const groupValue = item[key];

    if (!groupedResult[groupValue as string]) {
      groupedResult[groupValue as string] = [];
    }

    groupedResult[groupValue as string].push(item);
  }

  return groupedResult;
}

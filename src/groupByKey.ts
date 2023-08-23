type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const finalObj: GroupsMap<T> = {};

  items.forEach((item) => {
    const keyValue = item[key] as string;

    if (!finalObj[keyValue]) {
      finalObj[keyValue] = [];
    }

    finalObj[keyValue].push(item);
  });

  return finalObj;
}

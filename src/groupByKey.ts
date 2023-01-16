type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((el): void => {
    if (!(`${el[key]}` in result)) {
      result[`${el[key]}`] = [];
    }

    result[`${el[key]}`].push(el);

    return undefined;
  });

  return result;
}

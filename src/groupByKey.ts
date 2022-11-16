type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((elem) => {
    const elemKey = elem[key];

    if (!result[`${elemKey}`]) {
      result[`${elemKey}`] = [];
    }

    result[`${elemKey}`].push(elem);
  });

  return result;
}

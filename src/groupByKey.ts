type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((el) => {
    const keyElement = el[key].toString();

    if (!result[keyElement]) {
      result[keyElement] = [];
    }

    result[keyElement].push(el);
  });

  return result;
}

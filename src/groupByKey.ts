type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((item) => {
    const itemKey = String([item[key]]);

    const filtredItems = items.filter((elem) => String(elem[key]) === itemKey);

    result[itemKey] = filtredItems;
  });

  return result;
}

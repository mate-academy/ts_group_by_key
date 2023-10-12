type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((item) => {
    const currentKeyValue: string = Object(item[key]).toString();

    if (!(currentKeyValue in result)) {
      result[currentKeyValue] = [];
    }
    result[currentKeyValue].push(item);
  });

  return result;
}

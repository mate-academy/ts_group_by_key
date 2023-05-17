type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((el) => {
    const propValue = `${el[key]}`;

    if (result[propValue]) {
      result[propValue].push(el);
    } else {
      result[propValue] = [];
      result[propValue].push(el);
    }
  });

  return result;
}

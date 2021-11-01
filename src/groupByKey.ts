type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((el): void => {
    const keyValue: string = String(el[key]);

    if (keyValue in result) {
      result[keyValue].push(el);
    } else {
      result[keyValue] = [el];
    }
  });

  return result;
}

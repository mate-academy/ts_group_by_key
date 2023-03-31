type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((el) => {
    const keyInObj: string = String(el[key]);

    if (keyInObj in result) {
      result[keyInObj].push(el);
    } else {
      result[keyInObj] = [el];
    }
  });

  return result;
}

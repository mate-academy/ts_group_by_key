type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((elem) => {
    const value = `${elem[key]}`;

    if (result[value]) {
      result[value].push(elem);
    } else {
      result[value] = [elem];
    }
  });

  return result;
}

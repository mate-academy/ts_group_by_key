type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const obj: GroupsMap<T> = {};

  items.forEach((el) => {
    const value = el[key] as string;

    if (value in obj) {
      obj[value].push(el);
    } else {
      obj[value] = [el];
    }
  });

  return obj;
}

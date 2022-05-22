type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const obj: GroupsMap<T> = {};

  items.forEach((el: T) => {
    const myKey = String(el[key]);

    if (obj[myKey]) {
      obj[myKey].push(el);
    } else {
      obj[myKey] = [el];
    }
  });

  return obj;
}

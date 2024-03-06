type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const obj: GroupsMap<T> = {};

  items.forEach((el) => {
    if (Object.hasOwn(obj, el[key] as string)) {
      obj[el[key] as string].push(el);
    } else {
      obj[el[key] as string] = [el];
    }
  });

  return obj;
}

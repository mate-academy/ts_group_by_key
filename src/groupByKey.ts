type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T = object>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};
  const values = items.map((item: T) => item[key]);

  for (let i = 0; i < values.length; i++) {
    result[values[i] as string] = items.filter(
      (item) => item[key] === values[i],
    );
  }

  return result;
}

export function groupByKey2<T = object>(
  items: T[],
  key: keyof T,
): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((item) => {
    if (!result.hasOwnProperty(item[key] as string)) {
      result[item[key] as string] = [item];
    } else {
      result[item[key] as string].push(item);
    }
  });

  return result;
}

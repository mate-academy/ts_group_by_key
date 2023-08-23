type GroupsMap<T> = {
  [key: string]: T[];
};

type InitialObject = { [key: string]: any };

export function groupByKey<T = InitialObject>(
  items: T[],
  key: keyof T,
): GroupsMap<T> {
  const acc: GroupsMap<T> = {};

  items.forEach((obj) => {
    const value = obj[key as keyof T];
    const objValue = acc[value as keyof GroupsMap<T>];

    if (Array.isArray(objValue)) {
      objValue.push(obj);
    } else {
      acc[value as keyof GroupsMap<T>] = [obj];
    }
  });

  return acc;
}

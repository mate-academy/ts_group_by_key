type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T extends {[key: string]: string}>(
  items: T[],
  key: keyof T,
): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((element) => {
    if (element[key] in result) {
      result[element[key]].push(element);
    } else {
      result[element[key]] = [];
      result[element[key]].push(element);
    }
  });

  return result;
}

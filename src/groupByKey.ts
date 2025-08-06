type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T extends Record<string, any>>(
  items: T[],
  key: keyof T,
): GroupsMap<T> {
  // write code here;
  const result: GroupsMap<T> = {};

  for (const el of items) {
    if (!result.hasOwnProperty(el[key])) {
      result[el[key]] = [el];
    } else {
      result[el[key]].push(el);
    }
  }

  return result;
}

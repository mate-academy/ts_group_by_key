type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(
  items: Array<T>, key: keyof T,
): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((obj) => {
    const newKey = obj[key] as string;

    if (!result[newKey]) {
      result[newKey] = [];
    }

    result[newKey].push(obj);
  });

  return result;
}

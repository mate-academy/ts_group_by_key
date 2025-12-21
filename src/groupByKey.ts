type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T extends object>(
  items: T[],
  key: keyof T,
): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((objEl) => {
    const strKey = String(objEl[key]);

    if (Object.hasOwn(result, strKey)) {
      result[strKey].push(objEl);
    } else {
      result[strKey] = [objEl];
    }
  });

  return result;
}

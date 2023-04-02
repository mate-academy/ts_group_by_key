type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T, K extends keyof T>(
  items: T[],
  key: K
): GroupsMap<T> {
  const groupedByKeyObject: GroupsMap<T> = {};

  items.forEach((item) => {
    const desiredKey = item[key] as unknown as string;

    if (!desiredKey) {
      throw new Error("Key is not valid");
    }

    const itemsWithKey = items.filter((i) => i[key] === item[key]);

    groupedByKeyObject[desiredKey] = itemsWithKey;
  });

  return groupedByKeyObject;
}

type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T extends Record<string, any>>(
  items: T[],
  key: keyof T,
): GroupsMap<T> {
  // write code here;]
  return items.reduce((acc, curr) => {
    const newKey = curr[key];

    if (!acc[newKey]) {
      acc[newKey] = [];
    }

    acc[newKey].push(curr);

    return acc;
  }, {} as GroupsMap<T>);
}

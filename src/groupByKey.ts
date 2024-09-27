type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T extends Record<string, any>>(
  items: T[],
  key: keyof T,
): GroupsMap<T> {
  const output: GroupsMap<T> = {};

  items.forEach((item: T) => {
    if (!output[item[key]]) {
      output[item[key]] = [];
    }

    output[item[key]].push(item);
  });

  return output;
}

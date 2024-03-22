type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<Type>(
  items: Type[],
  key: keyof Type,
): GroupsMap<Type> {
  const result: GroupsMap<Type> = {};

  items.map((item) => {
    for (const prop of Object.keys(item)) {
      if (prop === key) {
        result[item[prop]] = items.filter((item1) => item[prop] === item1[key]);
      }
    }
  });

  return result;
}

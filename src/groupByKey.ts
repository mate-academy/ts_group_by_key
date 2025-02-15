type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<Type>(
  items: Type[],
  key: keyof Type,
): GroupsMap<Type> {
  const result: GroupsMap<Type> = {};

  items.forEach((el) => {
    let elem = String(el[key]);

    if (!result[elem]) {
      result[elem] = [];
    }

    result[elem].push(el);
  });

  return result;
}

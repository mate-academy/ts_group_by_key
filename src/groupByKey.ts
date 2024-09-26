type GroupsMap<Type> = {
  [key: string]: Type[];
};

export function groupByKey<Type>(
  items: Type[],
  key: keyof Type,
): GroupsMap<Type> {
  return items.reduce((accum: GroupsMap<Type>, current: Type) => {
    const keyOf = String(current[key]);

    if (!accum[keyOf]) {
      accum[keyOf] = [];
    }

    accum[keyOf].push(current);

    return accum;
  }, {});
}

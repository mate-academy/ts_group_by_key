type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey(
  items: object[],
  key: string,
): GroupsMap<typeof items> {
  const obj: GroupsMap<typeof items> = {};
  const keyArray = items.reduce((acc: string[], curr: object) => {
    const valueKey: string = curr[key];

    if (!acc.includes(valueKey)) {
      acc.push(valueKey);
    }

    return acc;
  }, []);

  keyArray.forEach((e: string) => {
    obj[e] = items.filter((curr: object) => curr[key] === e);
  });

  return obj;
}

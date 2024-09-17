type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: string & keyof T): GroupsMap<T> {
  const propertiesGroupBy = items.map((item) => item[key] as string);

  const blankResult = propertiesGroupBy.reduce((accum, property) => ({
    ...accum,
    [property]: [],
  }), {});

  return items.reduce((accum: GroupsMap<T>, item: T) => {
    const propertyGroupBy = item[key] as string;

    accum[propertyGroupBy].push(item);

    return accum;
  }, blankResult);
}

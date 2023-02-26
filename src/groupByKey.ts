type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey(
  items: any,
  key: string,
): GroupsMap<typeof items> {
  return items.reduce((acc: object, curr: object) => {
    const keyForElement: string = curr[key];

    if (!acc[keyForElement]) {
      acc[keyForElement] = [curr];

      return acc;
    }

    acc[keyForElement].push(curr);

    return acc;
  }, {});
}

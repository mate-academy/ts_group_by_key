type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey(
  items: [{ [key: string | number]: string }],
  key: keyof GroupsMap<{ [key: string | number]: string }>,
): object {
  // write code here;
  return items.reduce(
    (acc: GroupsMap<{ [key: string | number]: string }>, el) => {
      if (acc[el[key]]) {
        return acc;
      }

      return {
        ...acc,
        [el[key]]: items.filter((e) => e[key] === el[key]),
      };
    },
    {},
  );
}

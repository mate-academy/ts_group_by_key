type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce(
    (acum: {}, item: T) => {
      const nameKey = String(item[key]);

      if (nameKey in acum) {
        return acum;
      }

      const newItemInGroup = {
        [nameKey]: items.filter((itemK) => String(itemK[key]) === nameKey),
      };

      return {
        ...acum,
        ...newItemInGroup,
      };
    },
    {},
  );
}

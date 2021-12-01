type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce(
    (acum: {}, item: T) => {
      const NameKey = String(item[key]);

      if (NameKey in acum) {
        return acum;
      }

      const newT = {
        [NameKey]: items.filter((itemK) => String(itemK[key]) === NameKey),
      };

      return {
        ...acum,
        ...newT,
      };
    },
    {},
  );
}

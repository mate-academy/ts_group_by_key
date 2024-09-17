type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<
  T, K extends keyof T,
>(items: T[], key: K): GroupsMap<T> {
  const arrPartItems: string[] = [];
  const objSortItems: GroupsMap<T> = {};

  items.forEach((element) => {
    if (element[key]) {
      const keyValue = element[key] as any;

      if (!arrPartItems.includes(keyValue)) {
        arrPartItems.push(keyValue);
        objSortItems[keyValue] = [];
      }

      objSortItems[keyValue].push(element);
    }
  });

  return objSortItems;
}

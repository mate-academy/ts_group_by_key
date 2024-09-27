type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(
  items: T[],
  key: keyof T,
) : GroupsMap<T> {
  return items
    .reduce((acc: GroupsMap<T>, cur: T) => {
      const currentItemValue: string = String(cur[key]);

      if (!acc[currentItemValue]) {
        acc[currentItemValue] = [];
      }
      acc[currentItemValue].push(cur);

      return acc;
    }, {});
}

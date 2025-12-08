type GroupsMap<T> = {
  [key: string]: T[];
};

// export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
//   return items.reduce((acc, item) => {
//     const keyValue = String(item[key]); // приводимо до строки для ключа

//     if (!acc[keyValue]) {
//       acc[keyValue] = [];
//     }

//     acc[keyValue].push(item);

//     return acc;
//   }, {} as GroupsMap<T>);
// }

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((item) => {
    const keyValue = String(item[key]);

    if (!result[keyValue]) {
      result[keyValue] = [];
    }

    result[keyValue].push(item);
  });

  return result;
}

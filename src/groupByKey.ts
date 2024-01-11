// -------VERSION 3 for Mate-----------------

type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const defaultReduceValue: GroupsMap<T> = {};

  return items.reduce((acc, item) => {
    const groupKey = String(item[key]);

    if (!acc[groupKey]) {
      acc[groupKey] = [];
    }

    acc[groupKey].push(item);

    return acc;
  }, defaultReduceValue);
}

// ------------VERSION 1--------------------
// type GroupsMap<T> = {
//   [key: string]: T[];
// };

// export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
//   const defaultReduceValue: GroupsMap<T> = {};

//   return items.reduce((acc, item) => {
//     const groupKey = String(item[key]);

//     if (groupKey in acc === false) {
//       const value = items.filter((x) => String(x[key]) === groupKey);

//       acc[groupKey] = value;
//     }

//     return acc;
//   }, defaultReduceValue);
// }

// --------------VERSION 2-------------------
// type GroupsMap<T> = {
//   [key: string]: T[];
// };

// export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
//   const originalKeys: string[] = [];
//   const result: GroupsMap<T> = {};

//   // eslint-disable-next-line no-restricted-syntax
//   for (const item of items) {
//     if (!originalKeys.includes(String(item[key]))) {
//       originalKeys.push(String(item[key]));
//     }
//   }

//   // eslint-disable-next-line no-restricted-syntax
//   for (const originalKey of originalKeys) {
//     const value = items.filter((x) => String(x[key]) === originalKey);

//     result[originalKey] = value;
//   }

//   return result;
// }

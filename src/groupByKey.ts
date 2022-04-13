// type GroupsMap<T> = {
//   [key: string]: T[];
// };

// export function groupByKey <T>(items: T[], key: string): GroupsMap<T> {
//   const grouppedItems: GroupsMap<T> = {};

//   items.forEach((item) => {
//     if (!grouppedItems.hasOwnProperty(item[key])) {
//       grouppedItems[item[key]]
//         = items.filter((element) => item[key] === element[key]);
//     }
//   });

//   return grouppedItems;
// }

type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(
  items: T[],
  key: string,
): GroupsMap<T> {
  const groupedItems: GroupsMap<T> = {};

  items.forEach((item) => {
    if (!Object.prototype.hasOwnProperty.call(groupedItems, item[key])) {
      groupedItems[item[key]] = [];
    }

    groupedItems[item[key]].push(item);
  });

  return groupedItems;
}

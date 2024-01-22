type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey(items: [], key: string): GroupsMap<typeof items> {
  const result: GroupsMap<typeof items> = {};

  items.map((item) => {
    result[item[key]] = [];

    return result;
  });

  items.map((item) => {
    Object.keys(item).forEach((k) => {
      if (k === key) {
        result[item[key]].push(item);
      }
    });

    return result;
  });

  return result;
}

// for (const index: string of Object.keys(items)) {
//   const item = items[index];

//   if (item.hasOwnProperty([key])) {
//     const value = item[key];

//     if (!result[value]) {
//       result[value] = [];
//     }

//     result[value].push(item);
//   }

//   return result;
// }

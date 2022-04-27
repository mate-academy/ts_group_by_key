type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupsMap: GroupsMap<T> = {};

  items.forEach((item) => {
    const keyValue = item[key];

    if (typeof keyValue !== 'string' && typeof keyValue !== 'number') {
      throw new Error('Invalid data');
    }

    if (keyValue in groupsMap) {
      groupsMap[keyValue].push(item);
    } else {
      groupsMap[keyValue] = [item];
    }
  });

  return groupsMap;
}

// export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
//   const groupsMap: GroupsMap<T> = {};

//   for (const item of items) {
//     const keyValue = item[key];

//     if (typeof keyValue !== "string") {
//       throw new Error("Value of key for grouping should have type string");
//     }
//     if (keyValue in groupsMap) {
//       groupsMap[keyValue].push(item);
//     } else {
//       groupsMap[keyValue] = [item];
//     }
//   }

//   return groupsMap;
// }

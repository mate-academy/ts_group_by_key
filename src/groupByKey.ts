type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const workItems: T[] = JSON.parse(JSON.stringify(items));
  const groupOfObjects: GroupsMap<T> = {};

  workItems.forEach((item) => {
    const currentKey = item[key] as keyof GroupsMap<T>;

    if (!Object.prototype.hasOwnProperty.call(groupOfObjects, currentKey)) {
      groupOfObjects[currentKey] = [];
    }

    groupOfObjects[currentKey].push(item);
  });

  return groupOfObjects;
}

// type ForSet = string | number;

// export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
//   const workItems: T[] = JSON.parse(JSON.stringify(items));
//   const uniqueValues = new Set<ForSet>();
//   const groupOfObjects: GroupsMap<T> = {};

//   workItems.forEach((item) => {
//     const currentKey = item[key] as keyof GroupsMap<T>;

//     uniqueValues.add(currentKey);
//   });

//   uniqueValues.forEach((value: ForSet) => {
//     const byType = workItems
//       .filter((item: T) => item[key] === value);

//     groupOfObjects[value] = byType;
//   });

//   return groupOfObjects;
// }

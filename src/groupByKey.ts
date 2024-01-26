/* eslint-disable no-param-reassign */

type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce<GroupsMap<T>>((object, item: T) => {
    const groupKey = item[key] as string;

    object[groupKey] = items
      .filter((itemFilter) => itemFilter[key] === item[key]);

    return object;
  }, {});
}

// const groupObject: GroupsMap<T> = {};

//   items.forEach((obj: T) => {
//     const groupKey = obj[key] as string;

//     if (!groupObject[groupKey]) {
//       groupObject[groupKey] = [];
//     }

//     groupObject[groupKey].push(obj);
//   });

//   return groupObject;

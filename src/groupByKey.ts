type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((element: T) => {
    const index = String(element[key]);

    result[index] = items.filter((x) => x[key] === element[key]);
  });

  return result;
}

// or with reduce method

// export
// function groupByKey<T>(items: T[], key: keyof object): GroupsMap<T> {
//   function callback(prev: GroupsMap<T>, user: T): GroupsMap<T> {
//     return {
//       ...prev,
//       [user[key]]: items.filter((x: T) => x[key] === user[key]),
//     };
//   }

//   return items.reduce<GroupsMap<T>>(callback, {} as GroupsMap<T>);
// }

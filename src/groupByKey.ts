type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const obj: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const newKey: T[keyof T] = item[key];

    if (!(newKey in obj)) {
      obj[newKey] = [];
    }

    obj[newKey].push(item);
  });


              // <<HELP>>

  // if (!obj[arg]) {
  //   obj[arg] = itemsCopy.filter((a: T) => {
  //     return a[key] === arg;
  //   });
  // }
  return obj;
}

interface GroupsMap<T> {
  [key: string]: T[];
}

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const obj: GroupsMap<T> = {};

  items.forEach((book) => {
    const objKey = String(book[key]);

    if (obj[objKey]) {
      obj[objKey].push(book);
    } else {
      obj[objKey] = [book];
    }
  });

  return obj;
}

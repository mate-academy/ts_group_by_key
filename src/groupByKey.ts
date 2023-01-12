type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey <T>(items:T[], key: keyof T): GroupsMap<T> {
  const arr:GroupsMap<T> = {};

  items.forEach((elem) => {
    const keyFromItems = String(elem[key]);

    if (keyFromItems in arr) {
      arr[keyFromItems].push(elem);
    } else {
      arr[keyFromItems] = [elem];
    }
  });

  return arr;
}

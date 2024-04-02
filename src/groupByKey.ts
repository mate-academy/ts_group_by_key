type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const arrOfKeys: any[] = [];
  const result: GroupsMap<T> = {};

  for (let i = 0; i < items.length; i++) {
    if (!arrOfKeys.includes(items[i][key])) {
      arrOfKeys.push(items[i][key]);
    }
  }

  for (let i = 0; i < arrOfKeys.length; i++) {
    result[arrOfKeys[i]] = items.filter(
      (element) => element[key] === arrOfKeys[i],
    );
  }

  return result;
}

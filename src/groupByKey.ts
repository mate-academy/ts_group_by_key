type KeysOf<T> = keyof T;

type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: KeysOf<T>): GroupsMap<T> {
  return items.reduce((result, item) => {
    const keyValue = String(item[key]);

    if (!result[keyValue]) {
      result[keyValue] = [];
    }

    result[keyValue].push(item);

    return result;
  }, {} as GroupsMap<T>);
}

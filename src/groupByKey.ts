type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: string): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const currentKey: any = item[key as keyof T];
    const isResultAlreadyHaveProp
      = Object.prototype.hasOwnProperty.call(result, currentKey);

    if (!isResultAlreadyHaveProp) {
      result[currentKey] = [];
    }

    result[currentKey].push(item);
  });

  return result;
}

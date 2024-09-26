type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey <T>(item: T[], key: keyof T): GroupsMap<T> {
  const result = {} as GroupsMap<T>;

  item.forEach((element) => {
    const keyOfGroup = String(element[key]);

    if (!result[keyOfGroup]) {
      result[keyOfGroup] = [];
    }

    result[keyOfGroup].push(element);
  });

  return result;
}

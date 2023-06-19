type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey <T>(items: T[], key: keyof T): GroupsMap<T> {
  const result = {} as GroupsMap<T>;

  items.forEach((element) => {
    const keyOfGroup = String(element[key]);

    if (!result[keyOfGroup]) {
      result[keyOfGroup] = [];
    }

    result[keyOfGroup].push(element);
  });

  return result;
}

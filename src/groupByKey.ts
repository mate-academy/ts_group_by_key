type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((element) => {
    if (!result[String(element[key])]) {
      result[String(element[key])] = [];
    }

    result[String(element[key])].push(element);
  });

  return result;
}

type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T, K extends keyof T>(
  items: T[],
  key: K,
): GroupsMap<T> {
  const groupdObject: GroupsMap<T> = {};

  items.forEach((item) => {
    if (!groupdObject[String(item[key])]) {
      groupdObject[String(item[key])] = [];
    }

    groupdObject[String(item[key])].push(item);
  });

  return groupdObject;
}

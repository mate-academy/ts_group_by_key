type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(
  items: T[],
  key: keyof T,
): GroupsMap<T> {
  const groupedList: GroupsMap<T> = {};

  items.forEach((item) => {
    const group = item[key];

    if (!groupedList[String(group)]) {
      groupedList[String(group)] = items.filter((el) => el[key] === group);
    }
  });

  return groupedList;
}

type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(
  items: T[],
  key: keyof T,
): GroupsMap<T> {
  const groupedByKey: GroupsMap<T> = {};

  items.forEach((student) => {
    if (groupedByKey[String(student[key])] === undefined) {
      groupedByKey[String(student[key])] = [student];
    } else {
      groupedByKey[String(student[key])].push(student);
    }
  });

  return groupedByKey;
}

type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const nObj: GroupsMap<T> = {};

  for (let i = 0; i < items.length; i++) {
    const student = items[i];
    const studKey = String(student[key]);

    if (studKey in nObj) {
      nObj[studKey].push(student);
    } else {
      nObj[studKey] = [student];
    }
  }

  return nObj;
}

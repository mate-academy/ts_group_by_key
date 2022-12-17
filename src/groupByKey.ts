type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupArr: GroupsMap<T> = {};

  items.forEach((element) => {
    const newKey: string = `${element[key]}`;

    if (!(newKey in groupArr)) {
      groupArr[newKey] = [];
    }

    groupArr[newKey].push(element);
  });

  return groupArr;
}

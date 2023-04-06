type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((acc: GroupsMap<T>, currVal) => {
    const groper = String(currVal[key]);

    if (!(groper in acc)) {
      acc[groper] = [currVal];
    } else {
      acc[groper].push(currVal);
    }

    return acc;
  }, {});
}

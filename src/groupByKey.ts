type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  // write code here;
  const res: GroupsMap<T> = {};

  for (const item of items) {
    const resKey = item[key] as string;

    if (!Object.keys(res).includes(resKey)) {
      Object.assign(res, {
        [resKey]: items.filter((el) => el[key] === resKey),
      });
    }
  }

  return res;
}

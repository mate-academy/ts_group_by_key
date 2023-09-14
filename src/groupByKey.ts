type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  // write code here;
  const myArrays: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const value = item[key] as string;

    if (myArrays[value]) {
      myArrays[value].push(item);
    }

    if (!myArrays[value]) {
      myArrays[value] = [item];
    }
  });

  return myArrays;
}

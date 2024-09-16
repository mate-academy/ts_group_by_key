type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupted: GroupsMap<T> = {};

  items.forEach((obj) => {
    const keyOfObj = obj[key] as string;

    if (!groupted[keyOfObj]) {
      groupted[keyOfObj] = [];
    }

    groupted[keyOfObj].push(obj);
  });

  return groupted;
}

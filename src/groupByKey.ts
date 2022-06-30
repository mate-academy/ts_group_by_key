type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const startValue: GroupsMap<T> = {};

  const resultGroups = items.reduce((result, item) => {
    const mappingObj = { ...result };

    if (!mappingObj[`${item[key]}`]) {
      mappingObj[`${item[key]}`] = [];
    }

    mappingObj[`${item[key]}`].push(item);

    return { ...mappingObj };
  }, startValue);

  return resultGroups;
}

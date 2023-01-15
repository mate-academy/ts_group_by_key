type GroupsMap<T> = {
  [key: string]: T[];
};

type Group = {
  [key: string]: any;
};

export function groupByKey(items: Group[], key: string): GroupsMap<Group> {
  const result: GroupsMap<Group> = {};
  const newItems = [...items].sort((current, prev) => current[key] - prev[key]);

  newItems.map((el): void => {
    if (!(el[key] in result)) {
      result[`${el[key]}`] = [];
    }

    result[`${el[key]}`].push(el);

    return undefined;
  });

  return result;
}

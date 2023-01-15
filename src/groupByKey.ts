type GroupsMap<T> = {
  [key: string]: T[];
};

type Group = {
  [key: string]: number | string;
};

export function groupByKey(items: Group[], key: string): GroupsMap<Group> {
  const result: GroupsMap<Group> = {};

  items.map((el): void => {
    if (!(el[key] in result)) {
      result[`${el[key]}`] = [];
    }

    result[`${el[key]}`].push(el);

    return undefined;
  });

  return result;
}

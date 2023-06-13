type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(arg: T[], key: keyof T): GroupsMap<T> {
  const groupedByValues: GroupsMap<T> = {};

  arg.forEach((item) => {
    const value = item[key];

    if (!groupedByValues[<string>value]) {
      groupedByValues[<string>value] = [];
    }

    groupedByValues[<string>value].push(item);
  });

  return groupedByValues;
}

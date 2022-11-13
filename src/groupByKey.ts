type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T) :GroupsMap<T> {
  const allFilter = items.map((el) => el[key]);
  const groupedObj:GroupsMap<T> = {};
  const uniqueKeys
  = allFilter.filter((value, index, self) => self.indexOf(value) === index);

  uniqueKeys.forEach((item) => {
    groupedObj[String(item)]
    = items.filter((el) => el[key] === item);
  });

  return groupedObj;
}

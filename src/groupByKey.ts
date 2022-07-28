// import { booleanLiteral } from "@babel/types";

type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  // write code here;
  const byGroup: GroupsMap<T> = {};

  items.forEach((element) => {
    const elKey = String(element[key]);

    if (!Object.prototype.hasOwnProperty.call(byGroup, elKey)) {
      byGroup[elKey] = [];
    }

    byGroup[elKey].push(element);
  });

  return byGroup;
}

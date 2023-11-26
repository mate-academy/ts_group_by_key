/* eslint-disable */ 
import { log } from "console";
/* eslint-enable */

type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const resultMap: GroupsMap<T> = {};

  items.forEach((item) => {
    const itemKey = String(item[key]);

    if (!resultMap[itemKey]) {
      resultMap[itemKey] = [item];
    } else {
      resultMap[itemKey].push(item);
    }
  });

  return resultMap;
}

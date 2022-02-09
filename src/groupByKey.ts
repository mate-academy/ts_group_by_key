import { type } from "os";

type Item = {
  [key: string]: any;
};

type GroupsMap = {
  [key: string]: Item[];
};

export function groupByKey(items: Item[], key: keyof Item): GroupsMap {
  const result = {};

  items.forEach((item) => {
    if (result[item[key]]) {
      result[item[key]].push(item);
    } else {
      result[item[key]] = [item];
    }
  });

  return result;
}

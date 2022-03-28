// import { resourceLimits } from "worker_threads";

/* eslint-disable */
type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey <T>(items:T[], key: keyof T):GroupsMap<T> {
  const result: GroupsMap<T> = {};
  for(const item of items) {
    if(result[String(item[key])] === undefined) {
      result[String(item[key])] = [];
    }
    result[String(item[key])].push(item);
  }

  return result;
};



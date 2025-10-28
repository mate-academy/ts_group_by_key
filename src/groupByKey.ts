type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T extends object, K extends keyof T>(
  items: T[],
   key: K
  ): GroupsMap<T> {
  return items.reduce((accumulator: GroupsMap<T>, item: T) => {
     const groupValue = item[key];
     const groupKey: string = String(groupValue);
     
     if (!accumulator[groupKey]) {
       accumulator[groupKey] = []; 
     }
      accumulator[groupKey].push(item);
     return accumulator;
  }, {} as GroupsMap<T>);
}

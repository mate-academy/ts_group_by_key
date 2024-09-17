type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<Items>(
  items: Items[],
  key: string,
):GroupsMap<Items> {
  // write code here;
  return items.reduce((prev: GroupsMap<Items>, item: any) => {
    const pr = prev;

    pr[item[key]] = pr[item[key]] || [];
    pr[item[key]].push(item);

    return pr;
  }, {});
}

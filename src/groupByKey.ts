type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<I extends Object>(items: I[], key: string)
  : GroupsMap<I> {
  const result: GroupsMap<I> = {};

  items.forEach((item: any) => {
    const c = item[key];

    if (c in result) {
      result[c].push(item);
    } else {
      result[c] = [item];
    }
  });

  return result;
}

// --2
// const keys = Array.from(new Set(items.map((item) => item[key])));
// const result = items.reduce((r: I, a) => {
//   r[a[key]] = r[a[key]] || [];
//   r[a[key]].push(a);

//   return r;
// }, Object.create(null));

// --1
// for (const a of keys) {
//   result[a] = items.filter((curr) => curr[key] === a);
// }


type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: Array<Object>, key: string): GroupsMap<T> {
  // write code here;
  const values = items.map((obj) => obj[key]);
  const answer = {};

  values.forEach((element) => {
    answer[element] = [];

    items.forEach((object) => {
      if (object[key] === element) {
        answer[element].push(object);
      }
    });
  });

  return answer;
}

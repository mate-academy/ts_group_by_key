type GroupsMap<T> = {
  [key: string]: T[];
};

interface Books {
  'author': string,
  'country': string,
  'imageLink': string,
  'language': string,
  'pages': number,
  'title': string,
  'year': number,
}

interface Students {
  'name': string,
  'surname': string,
  'age': number,
  'married': boolean,
  'grades': number[],
}

type Result = Books & Students;

export function groupByKey(
  items: Result[],
  key: string,
): GroupsMap<Result> {
  const result: GroupsMap<Result> = {};

  items.forEach((el: any) => {
    if (!result[el[key]]) {
      result[el[key]] = [el];
    } else {
      result[el[key]].push(el);
    }
  });

  return result;
}

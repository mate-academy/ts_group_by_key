type GroupsMap<T> = {
  [key: string]: T[];
};

type Book = {
  id: number;
  color: string;
  country: string;
};

type Student = {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
};

export function groupByKey(
  items: Array<Book | Student>,
  key: string,
): GroupsMap<Object> {
  // write code here;
  const result: GroupsMap<typeof items> = {};

  items.forEach((item: any) => {
    if (!result[item[key]]) {
      result[item[key]] = [];
    }

    result[item[key]].push(item);
  });

  return result;
}

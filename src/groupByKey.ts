type GroupsMap<T> = {
  [key: string]: T[];
};

interface Book {
  author: string;
  country: string;
  imageLink: string;
  language: string;
  pages: number;
  title: string;
  year: number;
}

interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

type Item = Book | Student;

export function groupByKey(items: Item[], key: keyof Item): GroupsMap<Item> {
  return items.reduce((sum: GroupsMap<Item>, item: Item) => {
    // bag a pardon for this approach.
    // ESLint argued on me in case of useing hasOwnProperty
    // of in onbject approach (
    if (sum[item[key]] === undefined) {
      sum[item[key]] = [];
    }

    sum[item[key]].push(item);

    return sum;
  }, {});
}

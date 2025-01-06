type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((result: GroupsMap<T>, item: T) => {
    const groypKey = String(item[key]); // отримую значення ключа

    if (!result[groypKey]) {
      result[groypKey] = []; // ініціалізую масив якщо групи нема ще
    }
    result[groypKey].push(item); // додаю елемент до групи якої треба

    return result;
  }, {});
}

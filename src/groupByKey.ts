type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T extends Record<string, any>>(
  items: T[],
  key: keyof T,
): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((item) => {
    const value = String(item[key]); // Приводим значение к строке

    if (!result[value]) {
      result[value] = [];
    }

    result[value].push(item); // Теперь push выполняется всегда
  });

  return result;
}

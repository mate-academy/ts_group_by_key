type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<
  ElementType extends object,
  KeyType extends keyof ElementType,
>(items: ElementType[], key: KeyType): GroupsMap<ElementType> {
  const uniqueKeys = new Set(items.map((item) => item[key]));
  const keys = Array.from(uniqueKeys);

  return keys.reduce((acc: GroupsMap<ElementType>, currentKey) => {
    acc[currentKey as string] = items.filter(
      (item) => item[key] === currentKey,
    );

    return acc;
  }, {});
}

declare global {
  type Truthy<T> = false extends T
    ? never
    : 0 extends T
      ? never
      : '' extends T
        ? never
        : null extends T
          ? never
          : undefined extends T
            ? never
            : T;

  type Falsy = false | 0 | '' | null | undefined;
  type Maybe<T> = T | undefined;
}

export {};

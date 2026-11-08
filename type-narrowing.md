# Type Narrowing in TypeScript

## Introduction

A variable can sometimes hold more than one type of value. For example, a union type can allow both strings and numbers. Type narrowing helps TypeScript identify a more specific type through checks in our code, allowing us to use that value safely.

## Checking with typeof

The typeof operator is useful for checking primitive values such as strings, numbers, and booleans.

```ts
function formatValue(value: string | number): string {
  if (typeof value === "string") {
    return value.trim();
  }
  return value.toFixed(2);
}
```

Inside the first branch, TypeScript knows that value is a string. After that branch returns, only the number case remains. This lets us call number methods without a type assertion.

## Checking with instanceof

The instanceof operator checks whether an object's prototype chain contains a constructor's prototype. It is useful when working with class instances, including built-in classes.


```ts
function formatDate(value: Date | string): string {
  if (value instanceof Date) {
    return value.toISOString();
  }
  return value;
}
```

Here, TypeScript allows toISOString only after the Date check succeeds.

## Checking with in

The in operator checks whether a property exists on an object or its prototype chain. We can use it to distinguish object types with different required properties.


```ts
type Student = { name: string; grade: number };
type Teacher = { name: string; subject: string };

function getInfo(person: Student | Teacher): string {
  if ("grade" in person) {
    return `Grade: ${person.grade}`;
  }
  return `Subject: ${person.subject}`;
}
```


Optional properties need extra care because they may be absent even when an object has that type.

## Conclusion

Narrowing connects runtime checks with TypeScript's type checking. Using the right check helps us handle each possible value without guessing its type or disabling type safety.

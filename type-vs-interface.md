# Type Aliases and Interfaces in TypeScript

## Introduction

TypeScript lets us describe data using both type aliases and interfaces. They often look similar because both can describe an object's properties. However, they have some differences that help us decide which one to use.

## Describing Objects

An interface describes the structure that an object should follow. A type alias gives a name to a type, including an object type.

```ts
interface Student {
  name: string;
  age: number;
}

type Teacher = {
  name: string;
  subject: string;
};
```

In these examples, both approaches require objects to have the listed properties with the correct types. Neither creates an object or validates data at runtime.

## Main Differences

A type alias can represent unions, primitive types, and tuples directly. An interface cannot directly name a union of primitive types.

```ts
type StudentId = string | number;
type Coordinate = [number, number];
```

Interfaces support declaration merging. If we declare the same interface twice in the same scope, TypeScript combines their compatible members. A type alias cannot be declared again with the same name in that scope.

Interfaces can extend other interfaces. Type aliases can combine object types using an intersection.

```ts
interface SchoolStudent extends Student {
  school: string;
}

type ClassTeacher = Teacher & {
  className: string;
};
```

## Conclusion

I would choose an interface for an object structure that may need extension or declaration merging. I would choose a type alias for unions, tuples, or other type combinations. For a simple object, either option works, so keeping the project's style consistent is helpful.

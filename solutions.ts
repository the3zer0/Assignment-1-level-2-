function multiplyValue(value: number, multiplier?: number): number {
  if (multiplier === undefined) {
    return value * 2;
  }
  return value * multiplier;
}

function processInput(value: string | number | boolean): string | number {
  if (typeof value === "string") {
    return value.trim().toLowerCase();
  }
  if (typeof value === "number") {
    return value * 10;
  }
  if (value === true) {
    return "Active";
  }
  return "Inactive";
}

function formatCoordinate(
  coordinate: readonly [number, number, string]
): string {
  const [latitude, longitude, locationName] = coordinate;
  return `Location: ${locationName} (${latitude}, ${longitude})`;
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
  const combinedArray: T[] = [];
  for (const array of arrays) {
    for (const item of array) {
      combinedArray.push(item);
    }
  }
  return combinedArray;
}

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

function getPopularCourses(courses: Course[], minStudents: number): Course[] {
  const popularCourses: Course[] = [];
  for (const course of courses) {
    if (course.isPublished && course.students >= minStudents) {
      popularCourses.push(course);
    }
  }
  return popularCourses;
}

function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
  const values: T[K][] = [];
  for (const item of items) {
    values.push(item[key]);
  }
  return values;
}

class Employee {
  protected name: string;
  private baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  private department: string;

  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}

async function validateAgeAsync(age: number): Promise<string> {
  if (age < 18) {
    throw new Error("Access Denied: Must be 18 or older");
  }

  return new Promise<string>(
    (resolve: (value: string) => void): void => {
      setTimeout((): void => {
        resolve("Access Granted");
      }, 1000);
    }
  );
}

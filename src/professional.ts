interface User {
  idx: number;
  name: string;
  age: number;
}

//readonly 속성이란? 초기화 및 출력만 가능, 수정은 불가

//유틸리티 타입

type PartialUser = Partial<User>; // 모든 속성이 선택적
type RequiredUser = Required<User>; //모든 속성이 필수
type UserName = Pick<User, "name">; // name 속성만 포함
type UserWithoutAge = Omit<User, "age">; // age 속성 제외
type UserRoles = Record<"admin" | "editor", User>; // admin, editor에 User 타입 매핑

//제네릭 타입 : 재사용 가능한 컴포넌트나 함수 클래스 작성 시 매우 유용하다.

function getArray<T>(items: T[]): T[] {
  return [...items];
}

const stringArray = getArray<string>(["a", "b", "c"]);
const numberArray = getArray<number>([1, 2, 3]);

//Mapped Types : 객체 타입을 변환하거나 새 속성을 추가하는데 유용하다.

type ReadonlyUser = {
  readonly [K in keyof User]: User[K];
};

type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};

type UserWithNullable = Nullable<User>;

//조건부 타입 : 타입을 조건에 따라 변경할 수 있다.

type IsString<T> = T extends string ? true : false;

type Test1 = IsString<string>;
type Test2 = IsString<number>;

type RemoveReadonly<T> = T extends { readonly [K in keyof T]: infer R }
  ? { [K in keyof T]: R } //읽어오는 과정에서 새로운 객체타입을 생성하고 이떄 readonly 키워드 기본적으로 제거
  : never;

interface ReadonlyObj {
  readonly idx: number;
}

type WritableObj = RemoveReadonly<ReadonlyObj>; //readonly속성을 제거한다.

//타입 가드 : 런타임에서 특정 타입으로 좁히기 위한 함수

function isString(value: unknown): value is string {
  return typeof value === "string";
}

function logValue(value: string | number) {
  if (isString(value)) {
    console.log("String: ", value.toUpperCase());
  } else {
    console.log("Number : ", value.toFixed(2));
  }
}

//유형 좁히기(Type Narrowing) : Union 타입에서 특정 조건을 사용해 타입을 좁힌다.

type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; side: number };

function getArea(shape: Shape): number {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  } else {
    return shape.side ** 2;
  }
}

//타입 추론 강화 : TS의 as const 키워드 keyof, typeof 로 타입 출론을 강화할 수 있다.

const roles = ["admin", "editor", "viewer"] as const;
type Role = (typeof roles)[number];

function hasRole(userRole: Role): boolean {
  return roles.includes(userRole);
}



async function main(){
    logValue("hihi")
    logValue(55)

    console.log(getArea({ kind: "circle", radius: 10 }))
    console.log(hasRole("admin"))
}

main().then(() => {
    process.exit(0);
})
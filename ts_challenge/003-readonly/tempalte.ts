// type MyReadonly<T> = any
type MyReadonly<T> = {
  readonly [P in keyof T]: T[P]
}
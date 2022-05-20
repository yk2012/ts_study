// type MyPick<T, K> = any
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}

interface Todo {
  title: string
  description: string
  completed: boolean
}

const pick: MyPick<Todo, 'title' | 'description'> = {
  title: 'yk',
  description: 'ykxiaoce'
}


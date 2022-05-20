interface List {
  id: number
  name: string
}

interface Result{
  data: List[]
}

function render(result: Result) {
  result.data.forEach((value) => {
    console.log(value.id, value.name)
  })
}

let result = {
  data: [
    { id: 1, name: 'Y' },
    { id: 2, name: 'K' }
  ]
}

render(result)


// 混合类型的接口
interface Lib {
  (): void;
  version: string;
  doSomething(): void;
}




function getLib() { 

  let lib: Lib = (() => { }) as Lib
  lib.version = '1.0'
  lib.doSomething = () => { 
    // ...
  }

  return lib
}

let lib1 = getLib()
lib1()
lib1.version
lib1.doSomething()

let lib2 = getLib()

// 对象
// 函数
// 类的结构和类型
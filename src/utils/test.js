export function test() {
  console.log('test')
}
export class Person {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
  todoSome() {
    alert(this.x + '的年龄是' + this.y + '岁')
  }
}

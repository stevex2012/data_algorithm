// queue
class Stack {
  constructor(list){
    this.stack = list;
    // 顶
    this.top = this.stack[this.len() -1];
    // 底
    this.bottom = this.stack[0];
  }
  // 入栈
  push(item){
    this.stack.push(item)
  }
  // 出栈
  pop(){
    return this.stack.pop();
  }
  // 
  len(){
    return this.stack.length;
  }
  // isEmpty
  isEmpty(){
    return this.len() === 0;
  }
}

const queList = new Stack([1,2,3,4,5])

console.log('-queList', queList)
console.log(queList.isEmpty())

console.log(queList.pop())
console.log(queList.len())

console.log(queList)
queList.push(9)
console.log(queList)


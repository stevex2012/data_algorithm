// queue
class Queue {
  constructor(size){
    this.queue = new Array(size);
    // 队首
    this.front = 0;
    // 队尾
    this.tail = size - 1;
  }
  // 入队
  push(item){
    this.queue.push(item)
  }
  // 出队
  pop(){
    return this.queue.shift();
  }
}
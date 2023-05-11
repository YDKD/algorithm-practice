import IStack from "./IStack";

class ArrayStack<T> implements IStack<T> {
  private stack: T[] = [];
  push(element: T): void {
    this.stack.push(element);
  }

  pop(): T | undefined {
    return this.stack.pop();
  }
  peek(): T | undefined {
    return this.stack[this.stack.length - 1];
  }
  isEmpty(): boolean {
    return this.stack.length === 0;
  }
  get size(): number {
    return this.stack.length;
  }
}

export default ArrayStack;

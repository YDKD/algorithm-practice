import ArrayStack from "./stack/lib/ArrayStack";

function getBinary(decimal: number) {
  // 1、create stack
  const stack = new ArrayStack();

  //  2、excite while
  while (decimal > 0) {
    // 2.1 get remainder
    const remainder = decimal % 2;
    stack.push(remainder);

    decimal = Math.floor(decimal / 2);
  }

  while (!stack.isEmpty()) {
    console.log(stack.pop());
  }
}

getBinary(100);

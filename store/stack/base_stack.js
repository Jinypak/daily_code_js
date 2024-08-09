const stack = [];

const maxSize = 10;

function isFull(stack) {
  return stack.length === maxSize;
}

function isEmpty(stack) {
  return stack.length === 0;
}

function push(stack, time) {
  if (isFull(stack)) {
    console.log('스택이 꽉 찼습니다.');
    return null;
  } else {
    stack.push(time);
    console.log('데이터가 추가되었습니다.');
  }
}

function pop(stack) {
  if (isEmpty(stack)) {
    console.log('스택이 비었습니다.');
    return null;
  } else {
    console.log('데이터가 제거되었습니다.');
    return stack.pop();
  }
}

for (i = 1; i < maxSize; i++) {
  push(stack, Date.now());
  console.log(stack);
}

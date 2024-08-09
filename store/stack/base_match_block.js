// 소괄호 짝 맞추기

// 열린 괄호는 자신과 가장 가까운 닫힌 괄호를 만나면 상쇄됩니다.
// 상쇄 조건은 열린 괄호가 먼저 오고, 닫힌 괄호 사이에 아무 것도 없어야합니다.
// 더 상쇄할 수 없을 때까지 상쇄를 반복합니다.
// 남은 괄호가 있다면 false를 반환합니다.

const exam_input_result = [
  {
    input: '(())()',
    result: true,
  },
  {
    input: '((())))()',
    result: false,
  },
];

function Solution(stack) {
  const splitStack = stack.split('');

  for (i = 0; i < splitStack.length; i++) {}
  console.log(splitStack);

  return splitStack.length === 0 ? console.log('true') : console.log('false');
}

function isEmpty(stack) {
  return stack.length === 0;
}

Solution('()()()');

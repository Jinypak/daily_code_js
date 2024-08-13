// 영소문자로 이루어진 문자열 my_string과 영소문자 1글자로 이루어진 문자열 alp가 매개변수로 주어질 때,
// my_string에서 alp에 해당하는 모든 글자를 대문자로 바꾼 문자열을 return 하는
// solution 함수를 작성해 주세요.

// 제약 조건
// 1 ≤ my_string의 길이 ≤ 1,000

const exam_input_result = [
  {
    my_string: 'programmers',
    alp: 'p',
    result: 'Programmers',
  },
  {
    my_string: 'lowercase',
    alp: 'x',
    result: 'lowercase',
  },
];

function solution(my_string, alp) {
  var answer = '';

  const arrValue = my_string.split('');
  if (arrValue.includes(alp)) {
    for (let i = 0; i < arrValue.length; i++) {
      if (arrValue[i] === alp) {
        arrValue[i] = alp.toUpperCase();
      }
    }
  }

  answer = arrValue.join('');
  return answer;
}

for (i of exam_input_result) {
  solution(i.my_string, i.alp);
}

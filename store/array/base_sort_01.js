// 문제
// 정수 배열을 정렬해서 반환하는 Solution()을 완성하세요.

// 제약조건
// 정수 배열의 길이는 2이상 10^5 이하
// 정수 배열의 각 데이터 값은 -100,000 이상 100,000이하 입니다

// 입출력 예시

const exam_input_result = [
  {
    input: [1, -5, 4, 3],
    result: [-5, 1, 3, 4],
  },
  {
    input: [2, 1, 1, 3, 2, 5, 4],
    result: [1, 1, 2, 2, 3, 4, 5],
  },
  {
    input: [6, 1, 7],
    result: [1, 6, 7],
  },
];

function Solution(arr) {
  arr.sort((a, b) => a - b);

  return arr;
}

for (i = 0; i < exam_input_result.length; i++) {
  console.log(Solution(exam_input_result[i].input));
}

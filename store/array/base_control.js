// 문제
// 정수 배열을 하나 받습니다. 배열의 중복값을 제거하고
// 배열 데이터를 내림차순으로 정렬해서 반환하는 함수를 구현하세요.

// 제약 조건
// 배열의 길이는 2 이상 1,000 이하 입니다.
// 각 배열의 데이터 값은 -100,000 이상 100,000 이하 입니다.

// 입, 출력 예시
const exam_input_result = [
  {
    input: [4, 2, 2, 1, 3, 4],
    result: [4, 3, 2, 1],
    reverse: [1, 2, 3, 4],
  },
  {
    input: [2, 1, 1, 3, 2, 5, 4],
    result: [5, 4, 3, 2, 1],
    reverse: [1, 2, 3, 4, 5],
  },
];

function Solution(arr) {
  const uniqueArr = [...new Set(arr)];
  uniqueArr.sort((a, b) => a - b);

  console.log(uniqueArr);
  console.log(uniqueArr.reverse());
  return uniqueArr;
}
for (let i = 0; i < exam_input_result.length; i++) {
  Solution(exam_input_result[i].input);
}

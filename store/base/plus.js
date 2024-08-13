// 문제
// 정수 배열 numbers가 주어지면, 서로 다른 인덱스의 있는 2개의 수를 뽑아,
// 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 반환하는 함수를 만드세요.

// 제약 조건
// numbers의 길이는 2 이상 100 이하 입니다.
// numbers의 모든 수는 0 이상 100 이하 입니다.

const exam_input_result = [
  { input: [2, 1, 3, 4, 1], result: [2, 3, 4, 5, 6, 7] },
  { input: [5, 0, 2, 7], result: [2, 5, 7, 9, 12] },
];

function Solution(arr) {
  plusArr = [];
  function sum(a, b) {
    return a + b;
  }

  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < i; j++) {
      let value = sum(arr[i], arr[j]);
      plusArr.push(value);
    }
  }

  setArr = [...new Set(plusArr)];
  setArr.sort((a, b) => a - b);

  console.log(setArr);
  return setArr;
}

for (let i = 0; i < exam_input_result.length; i++) {
  Solution(exam_input_result[i].input);
}

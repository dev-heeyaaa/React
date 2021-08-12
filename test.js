const posts = [
  {
    id: 1,
    title: '리엑트 쉬워요',
    content: '리엑트란 XXXXXXXXXXXXXXX',
  },
  {
    id: 2,
    title: '피프티피플',
    content: '우와ㅏㅏㅏ',
  },
  {
    id: 3,
    title: '너는나의봄',
    content: '재밌음',
  },
  {
    id: 4,
    title: '슬의2',
    content: '재밌음2222',
  },
];

// 1. 추가
let addData = [
  ...posts,
  {
    id: 5,
    title: '슬의2',
    content: '재밌음2222',
  },
];

// console.log(addData);

// 2. 삭제, 검색
// remove로 자기자신(같은배열)을 삭제하지 않고
// filter로 필터링 해서 minusData로 던진다
// filter로 삭제와 select도 할 수 있다
let minusData = posts.filter((post) => post.id !== 3);
//console.log(minusData);
// 이걸 useState 상태변경에 던지면 알아서 얕은비교(주소비교)만 한다.

let selectData = posts.filter((post) => post.id === 3);
//console.log(selectData);

// 3. 수정

let updateData = posts.map((post) => {
  return post.id === 1 ? { ...post, title: '리엑트 어려워요' } : post;
});
console.log(updateData);

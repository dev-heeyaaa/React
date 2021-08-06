// 원래 fetch로 외부에서 데이터 다운받아야 하지만
// 임의로 만드는 것
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

function getData() {
  return posts;
}

export { getData };

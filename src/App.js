import { useEffect, useState } from 'react';
import styled from 'styled-components';
import MyButton from './components/MyButton';
import NavBar from './components/NavBar';
import PostItem from './components/PostItem';
import { getData } from './provider/Post';

const StyledBox = styled.div`
  width: 70%;
  margin: 30px auto;
  padding: 30px;
  background-color: #f5f5f5;
`;

const StyledRightBox = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 7px;
`;

function App() {
  console.log('App()');

  // 그림이 그릴 것들을 상태로 관리
  const [posts, setPosts] = useState();
  const [num, setNum] = useState(1);

  function deleteById(id) {
    let deleteData = posts.filter((post) => post.id !== id);
    setPosts(deleteData);
  }

  function addPost() {
    // 상태 변경이란
    // 값을 변경하고 함수를 재실행하는 것
    setPosts([
      ...posts,
      {
        id: 5,
        title: '리엑트 전개연산자',
        content: '전개연산자는 흩뿌리는 연산자',
      },
    ]);
  }

  // 다운과 상태변경을 같이 한다.
  async function download() {
    let res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    let parseRes = await res.json();
    console.log(parseRes);
    setPosts(parseRes);
  }

  // 생성자 만들기
  // 데이터 준비는 useEffect()에서 함
  // 1. App이 최초 실행될 때 실행
  // 2. 그림이 다시 그려질 때 실행(조건 : 의존성)
  useEffect(() => {
    download();
  }, []);
  // 배열 안이 의존성. 배열 안에 아무것도 넣지 않으면 절대 그림이 다시 그려지지 않음
  // 배열 안에 적혀있는 의존성이 변경될 때마다 그림이 다시 그려짐
  return (
    <div>
      <NavBar />

      <StyledBox>
        <div>{posts.title}</div>
      </StyledBox>
    </div>
  );
}

export default App;

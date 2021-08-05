import { useState } from 'react';
import styled from 'styled-components';
import Center from './test/Center';

const StyledContainer = styled.div`
  margin: 0 auto;
  width: 80%;
  background-color: darkblue;
  text-align: center;
`;

const StyleH1 = styled.h1`
  color: white;
`;

function App() {
  const [data, setData] = useState([1, 2, 3, 4]);

  return (
    <StyledContainer>
      <StyleH1>스타일 컴포넌트 디자인 해보기</StyleH1>
      {data.map((num) => (
        <Center num={num} haha="하하" />
      ))}
    </StyledContainer>
  );
}

export default App;

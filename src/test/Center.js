import React from 'react';
import styled from 'styled-components';

const StyleBox = styled.div`
  display: flex;
  gap: 10px;
  background-color: white;
`;

const StyleItem = styled.div`
  flex: 1;
  background-color: gray;
  width: 30%;
  height: 50px;
  margin-bottom: 5px;
`;

function Center(props) {
  console.log(props);
  return (
    <StyleBox>
      <StyleItem>{props.num}</StyleItem>
      <StyleItem>{props.haha}</StyleItem>
      <StyleItem></StyleItem>
    </StyleBox>
  );
}

export default Center;

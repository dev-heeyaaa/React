import React from 'react';
import styled from 'styled-components';
import MyButton from './MyButton';

const StyledPostBox = styled.div`
  padding: 10px;
  background-color: #faf9eb;
  margin-bottom: 10px;
`;

const StyledTitle = styled.div`
  color: darkgreen;
  font-size: 25px;
  font-weight: bold;
`;

const StyledButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
`;

function PostItem(props) {
  console.log(1, props);

  // 구조 분해 할당
  const { id, title, content } = props.post;
  const deleteById = props.deleteById;

  return (
    <StyledPostBox>
      <StyledTitle>
        {id} : {title}
      </StyledTitle>
      <StyledButtonBox>
        <button onClick={() => deleteById(id)}>삭제</button>
        <button>상세보기</button>
      </StyledButtonBox>
    </StyledPostBox>
  );
}

export default PostItem;

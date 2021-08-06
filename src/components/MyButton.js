import React from 'react';
import styled from 'styled-components';

function MyButton(props) {
  const { text, color } = props;

  const StyledButton = styled.button`
    background-color: ${color || 'lightpink'};
    height: 30px;
    color: white;
    font-weight: 600;
    border: none;
    box-shadow: 0 3px 3px 0 gray;
    cursor: pointer;
    margin-left: 3px;
  `;

  return <StyledButton> {text} </StyledButton>;
}

export default MyButton;

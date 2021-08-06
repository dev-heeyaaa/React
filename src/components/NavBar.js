import React from 'react';
import styled from 'styled-components';

const StyledNavBar = styled.div`
  border: 1px solid lightgray;
`;

const StyledMenu = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
`;

function NavBar(props) {
  return (
    <StyledNavBar>
      <StyledMenu>
        <li>홈</li>
        <li>글쓰기</li>
      </StyledMenu>
    </StyledNavBar>
  );
}

export default NavBar;

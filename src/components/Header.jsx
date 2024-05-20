import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const BookMarkHeader = styled.div`
  background-color:#fff;
  margin:0; padding:0;
  width:100%;
  height:56px;
  border-bottom:1px solid #ddd;
  position:relative;
`;

const PreClick = styled.button`
  position:absolute;
  top:15px;
  border:none;
  background-color:transparent;
`;

const Title = styled.h2`
  width:100%;
  margin:0;padding:0;
  display:inline-block;
  margin-top:5px;
  font-size:18px;
  font-weight:bold;
  text-align:center;
  line-height:2.5;
`;

const Header = ({children}) => {
  // 이전 페이지로 이동
  const navigate = useNavigate();
  const handlePreClick = () => {
    navigate(-1);
  }
  
  return(
    <BookMarkHeader>
      <PreClick onClick={handlePreClick}>
      </PreClick>
      <Title>{children}</Title>
    </BookMarkHeader>
  );
}

export default Header;
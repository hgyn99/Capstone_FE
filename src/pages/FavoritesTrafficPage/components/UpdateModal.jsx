import React from "react";
import styled from "styled-components";
import BaseModal from "../../../components/BaseModal";

const Title = styled.p`
  font-size: 18px;
  font-weight: bold;
`;

const UpdateContainer = styled.div`
  width:300px;
  height:40px;
  display:flex;
  align-items:center;
  margin:20px 0px;
`;
const Alias = styled.input`
  width:100%;
  height:100%;
  position:relative;

`;
const DeleteBtn = styled.button`
  position:absolute;
  right:30px;
  width:30px;
  height:40px;
`;

const ButtonContainer = styled.div`
  display:flex;
  justify-content:flex-end;
  align-items:center;
  gap:15px;
`;
const RequestBtn = styled.button`
  font-size: 15px;
  color: #666666;
`;
const CommitBtn = styled.button`
  font-size:15px;
  color:#535CE8;
`;



const UpdateModal = (isOpen, onRequestClose ) => {
  return(
    <BaseModal isOpen={isOpen} onRequestClose={onRequestClose}>
      <Title>별칭수정</Title>
      <UpdateContainer>
          <Alias 
            type="text"/>
          <DeleteBtn>
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="none"><path fill="#666" fill-opacity=".25" d="M6.5 13a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13Z"/><path stroke="#666" stroke-linecap="round" stroke-width=".75" d="m4.333 4.333 4.334 4.334m0-4.333L4.333 8.666"/></svg>
          </DeleteBtn>
      </UpdateContainer>
      <ButtonContainer>
        <RequestBtn>취소</RequestBtn>
        <CommitBtn>확인</CommitBtn>
      </ButtonContainer>
    </BaseModal>
  );
}

export default UpdateModal;
import React,{ useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import FavoritesTrafficItem from "./FavoritesTrafficItem";

const Container = styled.div`
  width:100%;
  height:calc(100% - 56px);
`;

const ListWrapper = styled.div`
  width:100%;
  height:52px;
  position:relative;
  border-bottom:1px solid #f0f0f0;
`;

const EditContainer = styled(motion.div)`
  width:100%;
  height:52px;
  display:flex;
  justify-content:flex-end;
  align-items:center;
  flex-direction:row;
  box-sizing:border-box;
  position:absolute;
  top:0;
  right:0;
  border:1px solid #f0f0f0;
`;
const UpdateButton = styled.button`
  width:55px;
  height:calc(100% - 1px);
  background-color:#535CE8;
  border:none;
  color:#fff;
  font-size:11px;
  text-align:center;
  letter-spacing:-1px;
`;
const DeleteButton = styled.button`
  width:55px;
  height:calc(100% - 1px);
  background-color:#F44336;
  border:none;
  color:#fff;
  font-size:11px;
  text-align:center;
  letter-spacing:-1px;
`;

const FavoritesTrafficList = ({traffics}) => {
    const [isButtonShow, setIsButtonShow] = useState(false);
    const buttonAnimateState = isButtonShow ? "visible" : "hidden";

    return(
    <Container>
      {traffics.map((traffic, index) => (
        <ListWrapper key={index}>
          <EditContainer
            key={index}
            initial="hidden"
            animate={buttonAnimateState}
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 },
            }}
          >
            <UpdateButton
              onClick={() => {
                console.log("수정");
              }}>
              수정
            </UpdateButton>
            <DeleteButton
              onClick={() => {
                console.log("삭제 ");
              }}>
              삭제
            </DeleteButton>
          </EditContainer>
          <FavoritesTrafficItem 
            traffic={traffic}
            setIsButtonShow={setIsButtonShow} />
        </ListWrapper>
      ))}
    </Container>
  );
}

export default FavoritesTrafficList;
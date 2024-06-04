import React,{ useState,useEffect } from "react";
import styled from "styled-components";
import MoveButton from "../../../assets/icon/moveButton.webp";
import { Reorder,motion,useAnimate,useDragControls,useMotionValue } from "framer-motion";
import UpdateModal from "./UpdateModal";
import Icon from "../../../assets/icon/favoriteLightIcon.png";

const ListWrapper = styled.div`
  width:100%;
  height:70px;
  position:relative;
  background-color:#fff;
  border-bottom:1px solid #f0f0f0;
  display:flex;
  align-items:center;
`;

const EditContainer = styled(motion.div)`
  width:100%;
  height:70px;
  display:flex;
  justify-content:flex-end;
  align-items:center;
  flex-direction:row;
  box-sizing:border-box;
  position:absolute;
  top:0;
  right:0;
`;
const UpdateButton = styled.button`
  width:55px;
  height:100%;
  background-color:#535CE8;
  border:none;
  color:#fff;
  font-size:11px;
  text-align:center;
  letter-spacing:-1px;
`;
const DeleteButton = styled.button`
  width:55px;
  height:100%;
  background-color:#F44336;
  border:none;
  color:#fff;
  font-size:11px;
  text-align:center;
  letter-spacing:-1px;
`;

const SwipeContainer = styled(motion.div)`
  width:100%;
  height:70px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap:12px;
  position:relative;
`;

const ListItemInner = styled(Reorder.Item)`
  width:100%;
  height:100%;
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap:12px;
  background-color:#fff;
`;

const ItemBox = styled.div`
  width:100%;
  height:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  gap:12px;
  background-color:#fff;
`;

const IconBox = styled.div`
  width:32px;
  height:100%;
  display:flex;
  justify-content:center;
  align-items:center;
`;

const IconImg = styled.img`
  width:30px;
`;

const AliasBox = styled.div`
  width:calc(100% - 60px);
  height:100%;
  text-align:left;
  display:flex;
  justify-content:flex-start;
  align-items:center;
`;

const TrafficAlias = styled.span`
  font-size:15px;
`;

const MoveBox = styled.div`
  width:50px;
  height:100%;
  display:flex;
  justify-content:center;
  align-items:center;
`;

const Move = styled.img``;


const FavoritesTrafficItem = ({ traffic }) => {
  const { trafficId, trafficAlias} = traffic;
  const swipeDragControls = useDragControls();
  const reorderDragControls = useDragControls();
  const [animateRef, animate] = useAnimate();
  const [currentDraggedItemId, setCurrentDraggedItemId] = useState(null);
  const itemX = useMotionValue(0);
  useEffect(() => {
    itemX.on('change', (v) => {
      const isOverThreshold = v < -55 / 2;
      setIsButtonShow(isOverThreshold);
    });
  });
  const [isButtonShow, setIsButtonShow] = useState(false);
  const buttonAnimateState = isButtonShow ? "visible" : "hidden";
  const [modal, setModal] = useState(false);

  console.log(traffic);
  return(
    <ListWrapper>
      <EditContainer
        initial="hidden"
        animate={buttonAnimateState}
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 },
      }}>
        <UpdateButton
          onClick={() => {
            setModal(true);
        }}>수정</UpdateButton>
        {modal === true ? <UpdateModal /> : null }
        <DeleteButton
          onClick={() => {
            console.log("삭제 ");
        }}>삭제</DeleteButton>
      </EditContainer>
      <SwipeContainer
        key={traffic.id}
        drag="x"
        dragConstraints={{ left: -110, right: 0 }}
        dragElastic={0.1}
        dragListener={false}
        dragControls={swipeDragControls}
        style={{x:itemX,}}
        //dragSnapToOrigin   // 드래그 끝나면 원래 위치로
        onDragStart = {() => {
          setCurrentDraggedItemId(trafficId)  // 현재 드래그 요소 추적
        }}
        onDragEnd = {() => {
          if(currentDraggedItemId === trafficId){
            const isOverThreshold = itemX.get() < -55 / 2; // editbutton 반쯤 나올 때 버튼 다 보여주기
            animate(animateRef.current, {x : isOverThreshold ? -110 : 0});
          } 
            setCurrentDraggedItemId(null);
        }}
        ref={animateRef}
      >
        <ListItemInner 
          id={traffic.id} value={traffic}
          dragControls={reorderDragControls}
          dragListener={false}>
          <ItemBox 
            onClick={() => console.log("클릭")}
            onPointerDown ={(e) => swipeDragControls.start(e)}>
            <IconBox>
              <IconImg src={Icon} alt="icon"/>
            </IconBox>
            <AliasBox>
              <TrafficAlias>{traffic.name}</TrafficAlias>
            </AliasBox>
          </ItemBox>
          <MoveBox onPointerDown={(e) => reorderDragControls.start(e)}>
            <Move src={MoveButton} alt="move"/>
          </MoveBox>
        </ListItemInner>
      </SwipeContainer>
    </ListWrapper>
  );
}

export default FavoritesTrafficItem;
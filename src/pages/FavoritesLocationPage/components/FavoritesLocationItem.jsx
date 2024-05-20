import React,{ useState,useEffect } from "react";
import styled from "styled-components";
import { MdStars } from "react-icons/md";
import { FaGripLines } from "react-icons/fa";
import { motion,useAnimate,useDragControls,useMotionValue } from "framer-motion";

const Container = styled(motion.div)`
  width:100%;
  height:100%;
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap:12px;
  position:relative;
  z-index:1000;
  background-color:#fff;
`;

const ItemBox = styled.div`
  width:100%;
  height:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  gap:12px;
`;

const IconBox = styled.div`
  width:32px;
  height:100%;
  display:flex;
  justify-content:center;
  align-items:center;
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

const FavoritesLocationItem = ({ location,setIsButtonShow }) => {
  const { locationId, locationAlias} = location;
  const dragControls = useDragControls();
  const [animateRef, animate] = useAnimate();
  const [currentDraggedItemId, setCurrentDraggedItemId] = useState(null);
  const itemX = useMotionValue(0);
  useEffect(() => {
    itemX.on('change', (v) => {
      const isOverThreshold = v < -55 / 2;
      setIsButtonShow(isOverThreshold);
    });
  });

  return(
    <Container
      key={locationId}
      drag="x"
      dragConstraints={{ left: -110, right: 0 }}
      dragElastic={0.1}
      // dragListener={false}
      dragControls={dragControls}
      style={{x:itemX,}}
      //dragSnapToOrigin   // 드래그 끝나면 원래 위치로
      onDragStart = {() => {
        setCurrentDraggedItemId(locationId)  // 현재 드래그 요소 추적
      }}
      onDragEnd = {() => {
        if(currentDraggedItemId === locationId){
          const isOverThreshold = itemX.get() < -55 / 2; // editbutton 반쯤 나올 때 버튼 다 보여주기
          animate(animateRef.current, {x : isOverThreshold ? -110 : 0});
        } 
          setCurrentDraggedItemId(null);
      }}
      ref={animateRef}
    >
      <ItemBox 
        onClick={() => console.log("클릭")}>
        <IconBox>
          <MdStars color="#B4D491" size="32px" />
        </IconBox>
        <AliasBox>
          <TrafficAlias>{locationAlias}</TrafficAlias>
        </AliasBox>
      </ItemBox>
      <MoveBox>
        <FaGripLines color="#666666" />
      </MoveBox>
    </Container>
  );
}

export default FavoritesLocationItem;
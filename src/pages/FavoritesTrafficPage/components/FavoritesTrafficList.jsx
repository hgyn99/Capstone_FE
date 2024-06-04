import React,{ useState,useEffect } from "react";
import styled from "styled-components";
import { motion,Reorder } from "framer-motion";
import FavoritesTrafficItem from "./FavoritesTrafficItem";


const Container = styled.div`
  width:100%;
  height:calc(100% - 56px);
  position:relative;
`;


const FavoritesTrafficList = ({favoritesTraffic}) => {
  // 순서변경
  const [items, setItems] = useState(favoritesTraffic,[]);
  
 
  useEffect(() => {
    setItems(favoritesTraffic);
  },[favoritesTraffic]);

  console.log(favoritesTraffic);

    return(
    <Container>
      <Reorder.Group axis="y" values={items} onReorder={setItems}>
        {items.map((traffic) => (
          <FavoritesTrafficItem 
            key={traffic.id}
            traffic={traffic}/>
        ))}
      </Reorder.Group>
    </Container>
  );
}

export default FavoritesTrafficList;
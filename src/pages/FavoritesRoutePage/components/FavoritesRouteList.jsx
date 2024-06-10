import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import FavoritesRouteItem from "./FavoritesRouteItem";

const Container = styled.div`
  width: 100%;
  height: calc(100% - 56px);
`;

const FavoritesRouteList = ({ favoritesPath }) => {
  return (
    <Container>
      {favoritesPath.data.path?.map((path) => (
        <FavoritesRouteItem key={path.id} path={path} />
      ))}
    </Container>
  );
};

export default FavoritesRouteList;

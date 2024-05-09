import { trafficInstance } from "..";

export const fetchTraffic = () => {
  return trafficInstance.get("/traffics");
};

export const fetchFavoriteTraffic = () => {
  return trafficInstance.get("/traffics/favorite");
};

export const addFavoriteTraffic = () => {
  return trafficInstance.post("/traffics/favorite");
};

export const fetchTrafficById = ({ trafficId }) => {
  return trafficInstance.get(`/traffics/${trafficId}`);
};

export const deleteFavoriteTraffic = ({ trafficId }) => {
  return trafficInstance.delete(`/traffics/favorite/${trafficId}`);
};

export const updateFavoriteTraffic = ({ trafficId }) => {
  return trafficInstance.put(`/traffics/favorite/${trafficId}`);
};

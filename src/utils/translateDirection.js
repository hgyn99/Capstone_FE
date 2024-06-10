// utils.js 파일
export const translateDirection = (directionCode) => {
  console.log(directionCode);
  const directionMap = {
    nt: "북쪽",
    et: "동쪽",
    st: "남쪽",
    wt: "서쪽",
    ne: "북동",
    se: "남동",
    sw: "남서",
    nw: "북서",
  };

  return directionMap[directionCode] || "알 수 없는 방향";
};

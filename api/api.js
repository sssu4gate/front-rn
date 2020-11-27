export const searchPlace = async (keyword) => {
  const dummyData = [
    { idx: 1, title: "어린이대공원", type: 1 },
    { idx: 2, title: "어메이징 브루잉 컴퍼니 건대점", type: 0 },
    { idx: 3, title: "도교스테이크 건대점", type: 0 },
    { idx: 4, title: "일감호", type: 1 },
    { idx: 5, title: "탐앤탐스", type: 2 },
    { idx: 6, title: "황소곱창", type: 0 },
    { idx: 7, title: "CGV 건대점", type: 3 },
    { idx: 8, title: "할리스 커피 건대점", type: 2 },
    { idx: 9, title: "세븐일레븐 건대점", type: 4 },
    { idx: 10, title: "건대입구역", type: 5 },
  ];
  //return fetch("https://seokh1213.github.io/cooldown/").then(html=>html.text());
  return dummyData;
};

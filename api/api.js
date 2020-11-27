import {TOKEN} from "../environment";
const OPTIONS =(method, token, data) => ({
    method: method, // *GET, POST, PUT, DELETE, etc.
    //mode: 'cors', // no-cors, cors, *same-origin
    //cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    //credentials: 'include', // include, *same-origin, omit
    headers: {
      'Authorization': token,
      'Content-type':"application/json"
    },
    ...(data?{body:JSON.stringify(data)}:{}),
    //redirect: 'follow', // manual, *follow, error
    //referrer: 'no-referrer', // no-referrer, *client
    // body: JSON.stringify(data), // body data type must match "Content-Type" header
});

export const searchPlace = (token, keyword, page=1) => {
  const dummyData = [
    {
      "id": 11124718*page,
      "address_name": "서울 동작구 상도동 511",
      "place_name": "숭실대학교",
      "category_name": "교육,학문 > 학교 > 대학교",
      "x": "126.95781764313084",
      "y": "37.495853033944364"
    },
    {
      "id": 21160725*page,
      "address_name": "서울 동작구 상도동 514",
      "place_name": "숭실대입구역 7호선",
      "category_name": "교통,수송 > 지하철,전철 > 수도권7호선",
      "x": "126.953621963422",
      "y": "37.4963172817574"
    },
    {
      "id": 26396782*page,
      "address_name": "서울 동작구 상도동 511",
      "place_name": "숭실대학교 정문",
      "category_name": "교통,수송 > 입출구",
      "x": "126.954504228758",
      "y": "37.4959716382717"
    },
    {
      "id": 26467193*page,
      "address_name": "서울 동작구 상도동 511",
      "place_name": "숭실대학교 한경직기념관",
      "category_name": "교육,학문 > 학교부속시설",
      "x": "126.957616486671",
      "y": "37.495619601209"
    },
    {
      "id": 1251608740*page,
      "address_name": "서울 동작구 상도동 511",
      "place_name": "숭실대 입구역3번 출구 앞 대여소",
      "category_name": "스포츠,레저 > 자전거,싸이클 > 자전거대여소",
      "x": "126.9536817226697",
      "y": "37.496601122278456"
    }
  ]

  const URL = `https://capstone-4gate.herokuapp.com/search/place?keyword=${encodeURI(keyword)}&page=${page}`
  fetch(URL, OPTIONS('get', TOKEN)).then(res=>res.json()).then(json=>{console.log(json);return json}).catch(err=>console.log("API ",err, err.status));
  return dummyData;
};

export const saveCourse = (token, course) => {
  const URL = `https://capstone-4gate.herokuapp.com/course/save`;
  fetch(URL, OPTIONS('post', TOKEN, course)).then(res=>res.json).catch(err=>console.log("API ",err, err.status));
  return {
    "commentNum": 0,
    "content": "string",
    "createdAt": "2020-11-27T08:16:28.509Z",
    "id": 0,
    "likeNum": 0,
    "memos": [
      "string"
    ],
    "nickName": "string",
    "places": [
      {
        "cost": 0,
        "placeDto": {
          "address_name": "string",
          "category_name": "string",
          "id": 0,
          "place_name": "string",
          "x": "string",
          "y": "string"
        },
        "time": "string"
      }
    ],
    "shareType": "PRIVATE",
    "title": "string",
    "totalCost": 0
  };
};

export const loadCourse = (token, id)=>{
  const URL = `https://capstone-4gate.herokuapp.com/course/${id}`;
  fetch(URL, OPTIONS('get', TOKEN)).then(res=>res.json).catch(err=>console.log("API ",err, err.status));
  return {
    "commentNum": 0,
    "content": "string",
    "createdAt": "2020-11-27T08:16:28.509Z",
    "id": 0,
    "likeNum": 0,
    "memos": [
      "string"
    ],
    "nickName": "string",
    "places": [
      {
        "cost": 0,
        "placeDto": {
          "address_name": "string",
          "category_name": "string",
          "id": 0,
          "place_name": "string",
          "x": "string",
          "y": "string"
        },
        "time": "string"
      }
    ],
    "shareType": "PRIVATE",
    "title": "string",
    "totalCost": 0
  };
}

import {TOKEN} from "../environment";
const OPTIONS =(method, token, data) => ({
    method: method, // *GET, POST, PUT, DELETE, etc.
    headers: {
      ...(token?{'Authorization': token}:{}),
      'Content-type':"application/json"
    },
    ...(data?{body:JSON.stringify(data)}:{}),
});

export const searchPlace = (token, keyword, page=1, offset=10) => {
  const URL = `https://capstone-4gate.herokuapp.com/search/place?keyword=${encodeURI(keyword)}&page=${page}&offset=${offset}`
  console.log('Start fetch', URL)
  return fetch(URL, OPTIONS('get', TOKEN)).then(res=>res.json()).then(json=>{console.log(json);return json});
};

export const saveCourse = async (token, course) => {
  const COURSE_URL = `https://capstone-4gate.herokuapp.com/course/save`;
  const PLACE_URL = `https://capstone-4gate.herokuapp.com/place/save`;
  await fetch(PLACE_URL, OPTIONS('post', TOKEN, course.places)).then(res=>res.status).then(status=>{console.log(status);return status})
  return fetch(COURSE_URL, OPTIONS('post', TOKEN, course)).then(res=>res.json()).then(course=>({...course, memos:course.memos.map(memo=>JSON.parse(memo))})).then(json=>{console.log(json);return json});
}

export const loadPost = (token, id) => {
  const URL = `https://capstone-4gate.herokuapp.com/course/${id}`;
  console.log('Start fetch', URL)
  return fetch(URL, OPTIONS('get', TOKEN)).then(res=>res.json()).then(json=>{console.log(json);return json});
};

export const loginUser = async ({accessToken, refreshToken}) => {
  const URL = `https://capstone-4gate.herokuapp.com/auth/login`;
  console.log('Start fetch', URL);
  const resultJson = await fetch(URL, OPTIONS('post', null, {accessToken, refreshToken})).then(res=>res.json());
  if(resultJson?.statusCode == 404)
    return fetch('https://kapi.kakao.com/v2/user/me', OPTIONS('post', `Bearer ${accessToken}`)).then(res=>res.json()).then(json=>({...json, ...resultJson, accessToken, refreshToken}));
  else
    return resultJson
};

export const namechkUser = (nickName) => {
  const URL = `https://capstone-4gate.herokuapp.com/auth/exist?nickName=${nickName}`;
  console.log('Start fetch', URL)
  return fetch(URL, OPTIONS('get')).then(res=>res.json());
};

export const signupUser = async ({id, accessToken, birth, gender, nickName, refreshToken}) => {
  const URL = `https://capstone-4gate.herokuapp.com/auth/signup`;
  console.log('Start fetch', URL)
  const result = await fetch(URL, OPTIONS('post', null, {id, accessToken, birth, gender, nickName, refreshToken})).then(res=>res.status);
  if(result == 200)
    return loginUser({accessToken, refreshToken});
  else 
    return {};
};

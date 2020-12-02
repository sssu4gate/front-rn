import AsyncStorage from '@react-native-async-storage/async-storage';

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
  return fetch(URL, OPTIONS('get', token)).then(res=>res.json()).then(json=>{console.log(json);return json});
};

export const saveCourse = async (token, course) => {
  const COURSE_URL = `https://capstone-4gate.herokuapp.com/course/save`;
  const PLACE_URL = `https://capstone-4gate.herokuapp.com/place/save`;
  const memoTypeMap={"CHECKOFF":0, "CHECKON":1, "MEMO":2}
  const parseCourse=course=>({
    ...course,
    date:course.dateDay,
    memos:course.memos.map(memo=>({text:memo.content, type:memoTypeMap[memo.type]}))
  });
  await fetch(PLACE_URL, OPTIONS('post', token, course.savePlaces)).then(res=>res.status);
  return fetch(COURSE_URL, OPTIONS('post', token, course)).then(res=>res.json()).then(json=>{console.log(json);return json}).then(parseCourse);
}

export const loadPost = (token, id) => {
  const URL = `https://capstone-4gate.herokuapp.com/course/${id}`;
  console.log('Start fetch', URL)
  const memoTypeMap={"CHECKOFF":0, "CHECKON":1, "MEMO":2}
  const parseCourse=course=>({
    ...course,
    date:course.dateDay,
    memos:course.memos.map(memo=>({text:memo.content, type:memoTypeMap[memo.type]}))
  });
  return fetch(URL, OPTIONS('get', token)).then(res=>res.json()).then(parseCourse);
};

export const loginUser = async ({accessToken, refreshToken}) => {
  const URL = `https://capstone-4gate.herokuapp.com/auth/login`;
  console.log('Start fetch', URL);
  const resultJson = await fetch(URL, OPTIONS('post', null, {accessToken, refreshToken})).then(res=>res.json());
  if(resultJson?.statusCode == 404)
    return fetch('https://kapi.kakao.com/v2/user/me', OPTIONS('post', `Bearer ${accessToken}`)).then(res=>res.json()).then(json=>({...json, ...resultJson, accessToken, refreshToken}));
  else
    return profileUser(resultJson.accessToken).then(json=>({...json, ...resultJson})).then(json=>{AsyncStorage.setItem('user', JSON.stringify(json));return json;});
};

export const profileUser = (token)=>{
  const URL = `https://capstone-4gate.herokuapp.com/user/info/profile`;
  console.log('Start fetch', URL);
  return fetch(URL, OPTIONS('get', token)).then(res=>res.json()).then(json=>({id:json.userInfo.id, nickName:json.nickName, birth:json.birth, gender:json.gender, likeNum:json.likeNum, profileImageUrl:json.userInfo.properties.profile_image, thumbnailImageUrl:json.userInfo.properties.thumbnail_image}));
}

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

export const checkLoginedUser = async ()=>{
  try {
    return JSON.parse(await AsyncStorage.getItem('user'));
  } catch (err) {
    console.log(err)
  }
}

export const requestPostList = (token, page=1, offset=10, option="LATEST")=>{
  const URL = `https://capstone-4gate.herokuapp.com/course/list?offset=${offset}&page=${page}&type=${option}`;
  console.log('Start fetch', URL);
  return fetch(URL, OPTIONS('get', token)).then(res=>res.json());
}

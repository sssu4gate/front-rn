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

export const searchPlace = (token, keyword, page=1, offset=10) => {
  const URL = `https://capstone-4gate.herokuapp.com/search/place?keyword=${encodeURI(keyword)}&page=${page}&offset=${offset}`
  console.log('Start fetch', URL)
  return fetch(URL, OPTIONS('get', TOKEN)).then(res=>res.json()).then(json=>{console.log(json);return json}).catch(err=>console.log("API ",err, err.status));
};

export const saveCourse = async (token, course) => {
  const COURSE_URL = `https://capstone-4gate.herokuapp.com/course/save`;
  const PLACE_URL = `https://capstone-4gate.herokuapp.com/place/save`;
  await fetch(PLACE_URL, OPTIONS('post', TOKEN, course.places)).then(res=>res.status).then(status=>{console.log(status);return status})
  return fetch(COURSE_URL, OPTIONS('post', TOKEN, course)).then(res=>res.json()).then(course=>({...course, memos:course.memos.map(memo=>JSON.parse(memo))})).then(json=>{console.log(json);return json}).catch(err=>console.log("API ",err, err.status));
}

export const loadPost = (token, id) => {
  const URL = `https://capstone-4gate.herokuapp.com/course/${id}`;
  console.log('Start fetch', URL)
  return fetch(URL, OPTIONS('get', TOKEN, id)).then(res=>res.json()).then(json=>{console.log(json);return json}).catch(err=>console.log("API ",err, err.status));
};


import AsyncStorage from "@react-native-async-storage/async-storage";

const OPTIONS = (method, token, data) => ({
  method: method, // *GET, POST, PUT, DELETE, etc.
  headers: {
    ...(token ? { Authorization: token } : {}),
    "Content-type": "application/json",
  },
  ...(data ? { body: JSON.stringify(data) } : {}),
});

export const searchPlace = (token, keyword, page = 1, offset = 10) => {
  const URL = `https://capstone-4gate.herokuapp.com/search/place?keyword=${encodeURI(
    keyword
  )}&page=${page}&offset=${offset}`;
  console.log("Start fetch", URL);
  return fetch(URL, OPTIONS("get", token))
    .then((res) => res.json())
    .then((json) => {
      if (json.status) return [];
      return json;
    });
};

export const saveCourse = async (token, course) => {
  const COURSE_URL = `https://capstone-4gate.herokuapp.com/course/save`;
  const PLACE_URL = `https://capstone-4gate.herokuapp.com/place/save`;
  const memoTypeMap = { CHECKOFF: 0, CHECKON: 1, MEMO: 2 };
  const parseCourse = (course) => ({
    ...course,
    date: course.dateDay,
    memos: course.memos.map((memo) => ({
      text: memo.content,
      type: memoTypeMap[memo.type],
    })),
  });
  console.log(PLACE_URL);
  await fetch(PLACE_URL, OPTIONS("post", token, course.savePlaces)).then(
    (res) => res.status
  );
  console.log(COURSE_URL);
  return fetch(COURSE_URL, OPTIONS("post", token, course))
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      return json;
    })
    .then(parseCourse);
};

export const loadPost = (token, id) => {
  const URL = `https://capstone-4gate.herokuapp.com/course/${id}`;
  console.log("Start fetch", URL);
  console.log("Token : ", token, id);
  const memoTypeMap = { CHECKOFF: 0, CHECKON: 1, MEMO: 2 };
  const parseCourse = (course) => ({
    ...course,
    date: course.dateDay,
    memos: course.memos.map((memo) => ({
      text: memo.content,
      type: memoTypeMap[memo.type],
    })),
  });
  return fetch(URL, OPTIONS("get", token))
    .then((res) => res.json())
    .then(parseCourse);
};

export const loginUser = async ({ accessToken, refreshToken }) => {
  const URL = `https://capstone-4gate.herokuapp.com/auth/login`;
  console.log("Start fetch", URL);
  const resultJson = await fetch(
    URL,
    OPTIONS("post", null, { accessToken, refreshToken })
  ).then((res) => res.json());

  if (resultJson?.statusCode == 404) {
    return fetch(
      "https://kapi.kakao.com/v2/user/me",
      OPTIONS("post", `Bearer ${accessToken}`)
    )
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        return json;
      })
      .then((json) => ({
        id: json.id,
        accessToken,
        refreshToken,
        nickName: json.properties.nickname,
        isSigned: "unsigned",
        birth: "",
        gender: "",
        likeNum: 0,
        userImgUrl: json.properties.profile_image
          ? json.properties.profile_image
          : "https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      }))
      .catch((error) => console.log("When Login user", error));
  } else
    return profileUser(resultJson.accessToken)
      .then((json) => ({ ...json, ...resultJson }))
      .then((json) => {
        AsyncStorage.setItem("user", JSON.stringify(json));
        console.log("in Login");
        console.log(json);
        return { ...json, isSigned: "signed" };
      })
      .catch((error) => console.log("When Profile user", error));
};

export const profileUser = (token) => {
  const URL = `https://capstone-4gate.herokuapp.com/user/info/profile`;
  console.log("Start fetch", URL);
  console.log(token);
  return fetch(URL, OPTIONS("get", token)).then((res) => res.json());
};

export const namechkUser = (nickName) => {
  const URL = `https://capstone-4gate.herokuapp.com/auth/exist?nickName=${nickName}`;
  console.log("Start fetch", URL);
  return fetch(URL, OPTIONS("get")).then((res) => res.json());
};

export const signupUser = async ({
  id,
  accessToken,
  birth,
  gender,
  nickName,
  refreshToken,
  userImgUrl,
}) => {
  const URL = `https://capstone-4gate.herokuapp.com/auth/signup`;
  console.log("Start fetch", URL);
  const info = {
    id,
    accessToken,
    birth,
    gender,
    nickName,
    refreshToken,
    kakaoImgUrl: userImgUrl,
  };
  return fetch(
    URL,
    OPTIONS("post", null, {
      id,
      accessToken,
      birth,
      gender,
      nickName,
      refreshToken,
      kakaoImgUrl: userImgUrl,
    })
  )
    .then((res) => res.json())
    .then((json) => ({ ...json, ...info }));
};

export const checkLoginedUser = async () => {
  try {
    //return JSON.parse(await AsyncStorage.getItem("user"));
    AsyncStorage.clear();
  } catch (err) {
    console.log(err);
  }
};

export const requestPostList = (
  token,
  page = 1,
  offset = 10,
  option = "LATEST"
) => {
  option = option == "REC" ? "LIKE" : option; //REC 주석 해제해야함.
  const URL = `https://capstone-4gate.herokuapp.com/course/list?offset=${offset}&page=${page}&type=${option}`;
  console.log("Start fetch", URL);
  return fetch(URL, OPTIONS("get", token)).then((res) => res.json());
};

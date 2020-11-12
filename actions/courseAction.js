import types from "./types";

export function addCourse(course) {
  return {
    type: types.COURSE_ADD,
    payload: course,
  };
}

import { BOOK,EDIT} from "./actionTypes";
export const book = content => ({
  type: BOOK,
  payload: {
    content
  }
});

export const edit = content => ({
  type: EDIT,
  payload: {
    content
  }
});

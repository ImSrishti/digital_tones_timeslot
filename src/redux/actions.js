import { TIMESLOTS} from "./actionTypes";

export const timeslots = content => ({
  type: TIMESLOTS,
  payload: {
    content
  }
});


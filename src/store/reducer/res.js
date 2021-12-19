import * as res from "../action/res";
const { CHANGE_RES } = res;

const initialState = {
  res: "$0",
};

const resReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_RES:
      return { ...state };
    default:
      return state;
  }
};

export default resReducer;

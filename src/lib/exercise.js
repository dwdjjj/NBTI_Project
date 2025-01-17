import { createStore } from "redux";

// createStore는 스토어를 만들어주는 함수입니다.
// 리액트 프로젝트에서는 단 하나의 스토어를 만듭니다.

/* 리덕스에서 관리 할 상태 정의 */
const initialState = {
  res: "",
  counter: 0,
  text: "",
  list: [],
};

/* 액션 타입 정의 */
// 액션 타입은 주로 대문자로 작성합니다.
// const INCREASE = "INCREASE";
// const CHANGE_SCORE = "CHANGE_TEXT";
// const ADD_TO_LIST = "ADD_TO_LIST";
const CHANGE_RES = "CHANGE_RES";
/* 액션 생성함수 정의 */
// 액션 생성함수는 주로 camelCase 로 작성합니다.
function changeRes() {
  return {
    type: CHANGE_RES, // 액션 객체에는 type 값이 필수입니다.
  };
}

// 화살표 함수로 작성하는 것이 더욱 코드가 간단하기에,
// 이렇게 쓰는 것을 추천합니다.
// const decrease = () => ({
//   type: DECREASE,
// });

// const changeScore = (text) => ({
//   type: CHANGE_SCORE,
//   text, // 액션안에는 type 외에 추가적인 필드를 마음대로 넣을 수 있습니다.
// });

// const addToList = (item) => ({
//   type: ADD_TO_LIST,
//   item,
// });

/* 리듀서 만들기 */
// 위 액션 생성함수들을 통해 만들어진 객체들을 참조하여
// 새로운 상태를 만드는 함수를 만들어봅시다.
// 주의: 리듀서에서는 불변성을 꼭 지켜줘야 합니다!

function reducer(state = initialState, action) {
  // state 의 초깃값을 initialState 로 지정했습니다.
  switch (action.type) {
    case CHANGE_RES:
      return {
        ...state,
        res: action.res,
      };

    // case CHANGE_SCORE:
    //   return {
    //     ...state,
    //     score: action.score,
    //   };
    // case ADD_TO_LIST:
    //   return {
    //     ...state,
    //     list: state.list.concat(action.item),
    //   };
    default:
      return state;
  }
}

/* 스토어 만들기 */
const store = createStore(reducer);

console.log(store.getState()); // 현재 store 안에 들어있는 상태를 조회합니다.

// 스토어안에 들어있는 상태가 바뀔 때 마다 호출되는 listener 함수
const listener = () => {
  const state = store.getState();
  console.log(state);
};

const unsubscribe = store.subscribe(listener);
// 구독을 해제하고 싶을 때는 unsubscribe() 를 호출하면 됩니다.

// 액션들을 디스패치 해봅시다.
store.dispatch(changeRes(10));
// store.dispatch(decrease());
// store.dispatch(changeScore(5));
// store.dispatch(addToList({ id: 1, text: "와우" }));

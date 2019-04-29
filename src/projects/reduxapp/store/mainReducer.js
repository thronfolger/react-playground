const initState = {
    timer: 0,
}

const mainReducer = (state = initState, action) => {

  switch (action.type) {

    case "TICK":
      return { ...state, timer: state.timer + 1 };
    default:
      return state;

  }

};

export default mainReducer;

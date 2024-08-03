let count = 0;

let state = {
  count: 0,
};

export const getState = () => state;

export const setState = (nextState) => {
  state = nextState;
};

export const loadAction = data => async dispatch => {
  dispatch({
    type: "LOAD_ACTION",
    payload: data
  });
};

export const userSelectedAction = values => dispatch => {
  dispatch({
    type: "SELECTED_ACTION",
    payload: values
  });
};

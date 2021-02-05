// This Function class is a cleanup for all your reducers,
// Is optional, is just to make your reducer more leaner
// So in reducer basically we update the state immutably, we take the old state and we give back an updated object.
// So this Utility is just to take the old state and pass back a updatedObject, is really optional BTW. Just a cleanup
export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties,
  };
};

/*

WE TAKE EXAMPLE FROM AUTH.JS FROM REDUCERS FOLDER

A REDUCER WITHOUT UTILITY HELP:
-------------------------------------
const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return {
        ...state,
        error: null,
        loading: true,
      };
    default:
      return state;
  }
};

A REDUCER WITH UTILITY HELP:
--------------------------------------
const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return updateObject(state, { error: null, loading: true });
    default:
      return state;
  }
};
*/

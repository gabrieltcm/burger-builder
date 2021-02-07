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

export const checkValidity = (value, rules) => {
  let isValid = true;
  if (!rules) {
    return true;
  }

  if (rules.required) {
    isValid = value.trim() !== "" && isValid;
  }

  if (rules.minLength) {
    isValid = value.length >= rules.minLength && isValid;
  }

  if (rules.maxLength) {
    isValid = value.length <= rules.maxLength && isValid;
  }

  if (rules.isEmail) {
    const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    isValid = pattern.test(value) && isValid;
  }

  if (rules.isNumeric) {
    const pattern = /^\d+$/;
    isValid = pattern.test(value) && isValid;
  }

  return isValid;
};

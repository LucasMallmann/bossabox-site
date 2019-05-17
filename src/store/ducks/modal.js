export const Types = {
  HIDE: 'modal/HIDE',
  SHOW: 'modal/SHOW',
};

/**
 * Actions
 */
export const Creators = {
  showModal: id => ({
    type: Types.SHOW,
    payload: { id },
  }),
  hideModal: () => ({
    type: Types.HIDE,
  }),
};

/**
 * Reducer
 */
const initialState = {
  visible: false,
  id: null,
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.SHOW:
      return {
        ...state,
        visible: true,
        id: action.payload.id,
      };
    case Types.HIDE:
      return {
        ...state,
        visible: false,
        id: null,
      };
    default:
      return state;
  }
};

export default modalReducer;

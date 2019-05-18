export const Types = {
  HIDE: 'modal/HIDE',
  SHOW: 'modal/SHOW',
  ADD_TOOL: 'modal/ADD_TOOL',
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
  addTool: () => ({
    type: Types.ADD_TOOL,
  }),
};

/**
 * Reducer
 */
const initialState = {
  visible: false,
  id: null,
  add: false,
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.SHOW:
      return {
        ...state,
        visible: true,
        add: false,
        id: action.payload.id,
      };
    case Types.HIDE:
      return {
        ...state,
        visible: false,
        id: null,
        add: false,
      };
    case Types.ADD_TOOL:
      return {
        ...state,
        visible: true,
        id: null,
        add: true,
      };
    default:
      return state;
  }
};

export default modalReducer;

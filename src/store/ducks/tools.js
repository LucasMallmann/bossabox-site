import { setLoading } from '../../utils/reducerUtils';

export const Types = {
  REQUEST_FAILURE: 'tools/REQUEST_FAILURE',

  ADD_REQUEST: 'tools/ADD_REQUEST',
  ADD_SUCCESS: 'tools/ADD_SUCCESS',

  REMOVE_REQUEST: 'tools/REMOVE_REQUEST',
  REMOVE_SUCCESS: 'tools/REMOVE_SUCCESS',

  FETCH_REQUEST: 'tools/FETCH_REQUEST',
  FETCH_SUCCESS: 'tools/FETCH_SUCCESS',
};

export const Creators = {
  addRequest: (title, link, description, tags) => ({
    type: Types.ADD_REQUEST,
    payload: {
      title,
      link,
      description,
      tags,
    },
  }),
  addSuccess: data => ({
    type: Types.ADD_SUCCESS,
    payload: { data },
  }),
  removeRequest: id => ({
    type: Types.REMOVE_REQUEST,
    payload: { id },
  }),
  removeSuccess: data => ({
    type: Types.REMOVE_SUCCESS,
    payload: { data },
  }),
  fetchRequest: search => ({
    type: Types.FETCH_REQUEST,
    payload: { search },
  }),
  fetchSuccess: data => ({
    type: Types.FETCH_SUCCESS,
    payload: { data },
  }),
  requestFailure: error => ({
    type: Types.REQUEST_FAILURE,
    payload: { error },
  }),
};

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case Types.FETCH_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        data: [],
      };
    case Types.FETCH_SUCCESS:
      return {
        ...state,
        data: [...state.data, ...action.payload.data],
        loading: false,
        error: null,
      };

    case Types.ADD_REQUEST:
      return setLoading(state);
    case Types.ADD_SUCCESS:
      return {
        ...state,
        data: [...state.data, action.payload.data],
        error: null,
      };
    case Types.REMOVE_REQUEST:
      return setLoading(state);
    case Types.REMOVE_SUCCESS:
      return {
        ...state,
        data: state.data.filter(data => data.id !== action.payload.id),
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export default reducer;

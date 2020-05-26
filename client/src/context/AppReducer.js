export default (state, action) => {
  switch(action.type) {
    case 'GET_URLS':
      return {
        ...state,
        loading: false,
        urls: action.payload
      }
      case 'GET_ARTICLES':
        return {
          ...state,
          loading: false,
          articles: action.payload
        }
    case 'DELETE_URL':
      return {
        ...state,
        urls: state.urls.filter(url => url._id !== action.payload)
      }
    case 'ADD_URL':
      return {
        ...state,
        urls: [...state.urls, action.payload]
      }
    case 'URL_ERROR':
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
}
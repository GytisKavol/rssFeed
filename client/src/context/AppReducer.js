export default (state, action) => {
  switch (action.type) {
    case "GET_URLS":
      return {
        ...state,
        loading: false,
        urls: action.payload,
      };
    case "GET_ARTICLES":
      return {
        ...state,
        loading: false,
        articles: action.payload,
      };
    case "GET_ARTICLES_FILTERED":
      return {
        ...state,
        loading: false,
        articlesFiltered: action.payload,
      };
    case "CLICK_FILTER":
      return {
        ...state,
        clickFilterBtn: !state.clickFilterBtn,
      };
    case "GET_KEYWORDS":
      return {
        ...state,
        loading: false,
        keywords: action.payload,
      };
    case "DELETE_URL":
      return {
        ...state,
        urls: state.urls.filter((url) => url._id !== action.payload),
      };
    case "DELETE_KEYWORD":
      return {
        ...state,
        keywords: state.keywords.filter(
          (keyword) => keyword._id !== action.payload
        ),
      };
    case "ADD_URL":
      return {
        ...state,
        urls: [...state.urls, action.payload],
      };
    case "ADD_KEYWORD":
      return {
        ...state,
        keywords: [...state.keywords, action.payload],
      };
    case "URL_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

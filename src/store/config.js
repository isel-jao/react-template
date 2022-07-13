const defaultState = {
  theme: localStorage.getItem("theme") || "light",
  primaryColor: localStorage.getItem("primaryColor") || "cyan",
  lang: localStorage.getItem("lang") || "en",
  layout: "desktop",
};

function configReducer(state = defaultState, action) {
  switch (action.type) {
    case "SET_THEME": {
      state.theme = action.payload;
      return { ...state, theme: action.payload };
    }
    case "SET_PRIMARY_COLOR":
      return { ...state, primaryColor: action.payload };
    case "SET_LANG":
      return { ...state, lang: action.payload };
    case "SET_LAYOUT":
      return { ...state, layout: action.payload };
    case "SET_CONFIG":
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

export default configReducer;

import {combineReducers} from "redux";

function coins(state = [], action) { 
  if (action.type === "COINS_LOADED") {
    return action.value;
  }
  return state;
}

function coin(state = [], action) {
  if (action.type === "GET_COIN_DONE") {
    return action.value;
  }
  return state;
}

function markets(state = [], action) { 
    if (action.type === "MARKETS_LOADED") {
      return action.value;
    }
    return state;
  }
  

function articles(state = [], action) { 
    if (action.type === "ARTICLES_LOADED") {
      return action.value;
    }
    return state;
  }
  
  function article(state = [], action) {
    if (action.type === "GET_ARTICLE_DONE") {
      return action.value;
    }
    return state;
  }

function searchResults(state = [], action) {
    if(action.type === "SEARCH_RESULTS_LOADED"){
      return action.value;
    }
    return state;
  }

const rootReducer = combineReducers({
  coins, coin, articles, article, markets, searchResults
});
export default rootReducer;
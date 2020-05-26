import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

// Initial state
const initialState = {
  urls: [],
  articles: [],
  keywords: [],
  articlesFiltered: [],
  error: null,
  loading: true,
  clickFilterBtn: true
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  async function clickFilter(clickFilterBtn) {
    dispatch({
    type: 'CLICK_FILTER',
    payload: clickFilterBtn
  })}
  async function getUrls() {
    try {
      const res = await axios.get('/api/v1/urls');

      dispatch({
        type: 'GET_URLS',
        payload: res.data.data
      });
    } catch (err) {
      dispatch({
        type: 'URL_ERROR',
        payload: err.response.data.error
      });
    }
  }
  async function getArticlesFiltered() {
    try {
      const res = await axios.get('/api/v1/articlesFiltered');

      dispatch({
        type: 'GET_ARTICLES_FILTERED',
        payload: res.data.data
      });
    } catch (err) {
      dispatch({
        type: 'ARTICLES_FILTERED_ERROR',
        payload: err.response.data.error
      });
    }
  }
  async function getArticles() {
    try {
      const res = await axios.get('/api/v1/articles');

      dispatch({
        type: 'GET_ARTICLES',
        payload: res.data.data
      });
    } catch (err) {
      dispatch({
        type: 'ARTICLES_ERROR',
        payload: err.response.data.error
      });
    }
  }
  async function getKeywords() {
    try {
      const res = await axios.get('/api/v1/keywords');

      dispatch({
        type: 'GET_KEYWORDS',
        payload: res.data.data
      });
    } catch (err) {
      dispatch({
        type: 'KEYWORD_ERROR',
        payload: err.response.data.error
      });
    }
  }
  async function deleteKeyword(id) {
    try {
      await axios.delete(`/api/v1/keywords/${id}`);

      dispatch({
        type: 'DELETE_KEYWORD',
        payload: id
      });
    } catch (err) {
      dispatch({
        type: 'KEYWORD_ERROR',
        payload: err.response.data.error
      });
    }
  }
  async function deleteUrl(id) {
    try {
      await axios.delete(`/api/v1/urls/${id}`);

      dispatch({
        type: 'DELETE_URL',
        payload: id
      });
    } catch (err) {
      dispatch({
        type: 'URL_ERROR',
        payload: err.response.data.error
      });
    }
  }

  async function addUrl(url) {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      const res = await axios.post('/api/v1/urls', url, config);

      dispatch({
        type: 'ADD_URL',
        payload: res.data.data
      });
    } catch (err) {
      dispatch({
        type: 'URL_ERROR',
        payload: err.response.data.error
      });
    }
  }
  async function addKeyword(keyword) {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      const res = await axios.post('/api/v1/keywords', keyword, config);

      dispatch({
        type: 'ADD_KEYWORD',
        payload: res.data.data
      });
    } catch (err) {
      dispatch({
        type: 'KEYWORD_ERROR',
        payload: err.response.data.error
      });
    }
  }
  return (<GlobalContext.Provider value={{
    urls: state.urls,
    articles: state.articles,
    articlesFiltered: state.articlesFiltered,
    keywords: state.keywords,
    error: state.error,
    loading: state.loading,
    clickFilterBtn: state.clickFilterBtn,
    clickFilter,
    getUrls,
    deleteUrl,
    addUrl,
    getArticles,
    getArticlesFiltered,
    getKeywords,
    deleteKeyword,
    addKeyword
  }}>
    {children}
  </GlobalContext.Provider>);
}
import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

// Initial state
const initialState = {
  urls: [],
  articles: [],
  error: null,
  loading: true
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
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

  return (<GlobalContext.Provider value={{
    urls: state.urls,
    articles: state.articles,
    error: state.error,
    loading: state.loading,
    getUrls,
    deleteUrl,
    addUrl,
    getArticles
  }}>
    {children}
  </GlobalContext.Provider>);
}
import React from "react";
import { UrlList } from "./components/UrlList";
import { AddUrl } from "./components/AddUrl";
import { KeywordList } from "./components/KeywordList";
import { AddKeyword } from "./components/AddKeyword";
import { Layout } from "./componentStyle/Layout";
import { NavigationBar } from "./componentStyle/NavigationBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalState";
import { ArticleList } from "./components/ArticleList";

import "./App.css";

function App() {
  return (
    <GlobalProvider>
      <NavigationBar />
      <Layout>
        <Router>
          <div className="container">
            <Route path="/" exact component={ArticleList} />
            <Route path="/settings" exact component={UrlList} />
            <Route path="/settings" exact component={AddUrl} />
            <Route path="/keywords" exact component={KeywordList} />
            <Route path="/keywords" exact component={AddKeyword} />
          </div>
        </Router>
      </Layout>
    </GlobalProvider>
  );
}

export default App;

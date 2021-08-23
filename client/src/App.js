import './App.css';
import React from "react";
import { BrowserRouter as Router,  Switch, Route } from "react-router-dom";

import Upload from './components/upload/Upload'
import Main from './components/main/Main'
import { Layout } from './components/layout/Layout';
import { NavigationBar } from './components/navbar/Navbar'

function App() {
  return (
    <React.Fragment>
      <NavigationBar />
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/" component={Main} />
              <Route exact path="/upload" component={Upload} />
            </Switch>
          </Router>
      </Layout>
    </React.Fragment>
  );
}

export default App;

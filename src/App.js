import React, {Component} from "react";
import "./App.css";

import {Switch, Route, Redirect, withRouter} from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import PostForm from "./containers/BlogPost/PostForm";
import UpdatePostForm from "./containers/BlogPost/UpdatePostForm";
import PostsContainer from "./containers/BlogPost/PostsContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Dashboard />

        <main>
          <Switch>
            <Route
              exact
              path="/"
              render={() => <PostsContainer recent={true} />}
            />
            <Route exact path="/all-posts" component={PostsContainer} />
            <Route exact path="/new-post" component={PostForm} />
            <Route exact path="/update-post/:id" component={UpdatePostForm} />
            <Redirect to="/" />
          </Switch>
        </main>
      </div>
    );
  }
}

export default withRouter(App);

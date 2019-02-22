import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../history";
import Header from "./Header";
import Landing from "./Landing";
import IdeaList from "./idea/IdeaList";
import ShowIdea from "./idea/ShowIdea";
import CreateIdea from "./idea/CreateIdea";
import EditIdea from "./idea/EditIdea";
import DeleteIdea from "./idea/DeleteIdea";
import Search from "./idea/Search";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/idea/all" exact component={IdeaList} />
            <Route path="/idea/new" exact component={CreateIdea} />
            <Route path="/idea/edit/:id" exact component={EditIdea} />
            <Route path="/idea/delete/:id" exact component={DeleteIdea} />
            <Route path="/idea/:id" exact component={ShowIdea} />
            <Route path="/ideas/search" exact component={Search} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;

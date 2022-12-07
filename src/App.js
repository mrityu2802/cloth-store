import "./App.css";
import React from "react";
import HomePage from "./pages/homepage/homepage.component";
import { Switch, Route } from "react-router-dom";

const Hatspage = (props) => {
  console.log(props);
  return (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  );
};
const about = () => {
  return (
    <div>
      <h1>Welcome to About</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={Hatspage} />
        <Route path="/about" component={about} />
      </Switch>
    </div>
  );
}

export default App;

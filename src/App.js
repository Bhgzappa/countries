import {Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Countries from "./pages/Countries";
import Navbar from "./components/Navbar";
import Details from "./pages/Details"

function App() {
  return (
    <main>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/countries" component={Countries} exact />
        <Route path="/details/:name" component={Details} />
        </Switch>
    </main>
  );
}

export default App;

import Layout from "./Components/Layout";

import Home from "./pages/Home";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";
import PageThree from "./pages/PageThree";
import PageCTA from "./pages/PageCTA";
import {Route,Switch } from "react-router-dom";

function App() {
  return (
    <Layout>

      <Switch>

        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/page-one">
          <PageOne />
        </Route>
        <Route path="/page-two">
          <PageTwo />
        </Route>
        <Route path="/page-three">
          <PageThree />
        </Route>
        <Route path="/page-cta">
          <PageCTA />
        </Route>

      </Switch>

    </Layout>
  );
}

export default App;

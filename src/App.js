import './App.css';
import Main from './pages/main';
import Y2019 from './pages/Y2019';
import { BrowserRouter,Route, Link,Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter className="app">
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/2019" component={Y2019} />
      </Switch>
      <div className="app">
        <div className="app__left__border" />
        <div className="app__right__border" />
        <div className="app__top__border" />
        <div className="app__bottom__border" />
        {/* <Link to="/2019">2019</Link> */}
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;

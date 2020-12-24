import './App.css';
import Main from './pages/main';
import Y2019 from './pages/Y2019';
import { BrowserRouter,Route, Link,Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/2019" component={Y2019} />
      </Switch>
      <div>
        <div className="app__left__border" />
        <div className="app__right__border" />
        <div className="app__top__border" />
        <div className="app__bottom__border" />
      </div>
    </BrowserRouter>
  );
}

export default App;

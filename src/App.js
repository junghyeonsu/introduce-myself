import './App.css';
import Main from './pages/main';
import Y2019 from './pages/Y2019';
import Y2020 from './pages/Y2020';
import Y2021 from './pages/Y2021';
import { BrowserRouter,Route, Link,Switch } from "react-router-dom";
import styled from 'styled-components'

const Body = styled.div`
  background-color : #ffecba;
  position: fixed;
  left:0;
  top:0;
  width:100%;
  height:100%;
  z-index:-1;
`;

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/2019" component={Y2019} />
        <Route exact path="/2020" component={Y2020} />
        <Route exact path="/2021" component={Y2021} />
      </Switch>
      <Body>
        {/* <div className="app__left__border" />
        <div className="app__right__border" />
        <div className="app__top__border" />
        <div className="app__bottom__border" /> */}
      </Body>
    </BrowserRouter>
  );
}

export default App;

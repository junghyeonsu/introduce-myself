import './App.css';
import Main from './pages/main/main';
import { BrowserRouter, Route, Switch } from "react-router-dom";
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
      </Switch>
      <Body />
    </BrowserRouter>
  );
}

export default App;

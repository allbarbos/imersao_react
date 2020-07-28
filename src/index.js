import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./reset.css";
import Home from "./pages/home";
import CadastroVideo from './pages/cadastro/Video'
import CadastroCategoria from './pages/cadastro/Categoria'

const Page404 = () => '404'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' component={Home} exact/>
      <Route path='/cadastro/video' component={CadastroVideo} exact/>
      <Route path='/cadastro/categoria' component={CadastroCategoria} exact/>
      <Route component={Page404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

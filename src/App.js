import React from 'react'
import {
  BrowserRouter,
  Route,
  Switch,
} from "react-router-dom";
import './assets/css/style.scss'

import NavbarComponent from './component/NavbarComponent'
import Beranda from './scenes/Beranda';
import Lomba from './scenes/Lomba';
import IsiLomba from './scenes/IsiLomba';
import Prestasi from './scenes/Prestasi';
import login from './scenes/auth/login';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavbarComponent />
        <main>
          <Switch>
            <Route path="/login" exact component={login} />
            <Route path="/" exact component={Beranda} />
            <Route path="/home" exact component={Beranda} />
            <Route path="/lomba" exact component={Lomba} />
            <Route path="/isi-lomba" exact component={IsiLomba} />
            <Route path="/prestasi" exact component={Prestasi} />
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;

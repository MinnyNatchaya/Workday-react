import './App.css';

import './AppResponsive.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from './contexts/userContext';

import Footer from './components/Footer';
import Header from './components/header/Header';
import routes from './config/route';

// import io from 'socket.io-client';
// import { API_URL } from './config/env';
// const socket = io.connect(API_URL);

function App() {
  const { role } = useContext(UserContext);

  return (
    <div className="App">
      <Header />
      <Switch>
        {routes[role].route.map(item => (
          <Route key={item.path} exact path={item.path} component={item.component} />
        ))}

        <Redirect to={routes[role].redirect} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

import './App.css';
import './AppResponsive.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Footer from './components/layout/Footer';
import Header from './components/layout/header/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Service from './pages/Service';
import SignupWorker from './pages/SignupWorker';
import ServiceType from './pages/ServiceType';
import SeviceTypeWorker from './pages/SeviceTypeWorker';
import CreateOrder from './pages/CreateOrder';
import ProfileOrder from './pages/ProfileOrders';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';

// const queryString = require('query-string');

function App() {
  // const subType = queryString.parse(props.location.search);
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/signup-worker" component={SignupWorker} />
          <Route path="/service" component={Service} />
          <Route path="/service-type" component={ServiceType} />
          <Route path="/service-type-worker" component={SeviceTypeWorker} />
          <Route path="/create-order" component={CreateOrder} />
          <Route path="/profile-orders" component={ProfileOrder} />
          <Route path="/profile" component={Profile} />
          <Route path="/profile-edit" component={ProfileEdit} />
          <Route path="/" component={Home} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

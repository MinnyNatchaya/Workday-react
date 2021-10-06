import './App.css';
import './AppResponsive.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from './contexts/userContext';

import Footer from './components/Footer';
import Header from './components/header/Header';
import routes from './config/route';

// import Home from './pages/Home';
// import Login from './pages/Login';
// import Signup from './pages/Signup';
// import Service from './pages/Service';
// import SignupWorker from './pages/SignupWorker';
// import ServiceType from './pages/ServiceType';
// import SeviceTypeWorker from './pages/SeviceTypeWorker';
// import CreateOrder from './pages/CreateOrder';
// import ProfileOrder from './pages/ProfileOrders';
// import Profile from './pages/Profile';
// import ProfileEdit from './pages/ProfileEdit';

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

        {/* <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/signup-worker" component={SignupWorker} />
        <Route path="/service" component={Service} />
        <Route path="/service-type" component={ServiceType} />
        <Route path="/service-type-worker" component={SeviceTypeWorker} />
        <Route path="/create-order" component={CreateOrder} />
        <Route path="/profile-orders" component={ProfileOrder} />
        <Route path="/profile" component={Profile} />
        <Route path="/profile-edit" component={ProfileEdit} />
        <Route path="/" component={Home} /> */}
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

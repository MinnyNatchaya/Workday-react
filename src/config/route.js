import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Service from '../pages/Service';
import SignupWorker from '../pages/SignupWorker';
import ServiceType from '../pages/ServiceType';
import SeviceTypeWorker from '../pages/SeviceTypeWorker';
import CreateOrder from '../pages/CreateOrder';
import ProfileOrder from '../pages/ProfileOrders';
import Profile from '../pages/Profile';
import ProfileEdit from '../pages/ProfileEdit';

const route = {
  guest: {
    route: [
      {
        path: '/login',
        component: Login
      },
      {
        path: '/signup',
        component: Signup
      },
      {
        path: '/signup-worker',
        component: SignupWorker
      }
    ],
    redirect: '/login'
  },
  client: {
    route: [
      {
        path: '/',
        component: Home
      },
      {
        path: '/service',
        component: Service
      },
      {
        path: '/service-type',
        component: ServiceType
      },
      {
        path: '/create-order',
        component: CreateOrder
      },
      {
        path: '/profile-orders',
        component: ProfileOrder
      },
      {
        path: '/profile',
        component: Profile
      },
      {
        path: '/profile-edit',
        component: ProfileEdit
      }
    ],
    redirect: '/login'
  },
  worker: {
    route: [
      {
        path: '/',
        component: Home
      },
      {
        path: '/service',
        component: Service
      },
      {
        path: '/service-type-worker',
        component: SeviceTypeWorker
      },
      {
        path: '/create-order',
        component: CreateOrder
      },
      {
        path: '/profile-orders',
        component: ProfileOrder
      },
      {
        path: '/profile',
        component: Profile
      },
      {
        path: '/profile-edit',
        component: ProfileEdit
      }
    ],
    redirect: '/login'
  }
};

export default route;

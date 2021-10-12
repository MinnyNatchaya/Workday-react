import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Service from '../pages/Service';
import SignupWorker from '../pages/SignupWorker';
import ServiceType from '../pages/ServiceType';
import SeviceTypeWorker from '../pages/SeviceTypeWorker';
import CreateOrder from '../pages/CreateOrder';
import OrderEdit from '../pages/OrderEdit';
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
        path: '/service-type/:categoryId',
        component: ServiceType
      },
      {
        path: '/order/:subCategoryId',
        component: CreateOrder
      },
      {
        path: '/order/edit/:id',
        component: OrderEdit
      },
      {
        path: '/profile/orders',
        component: ProfileOrder
      },
      {
        path: '/profile',
        component: Profile
      },
      {
        path: '/profile/edit',
        component: ProfileEdit
      }
    ],
    redirect: '/'
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
        path: '/service-type/:categoryId',
        component: ServiceType
      },
      {
        path: '/service-type-worker/:subCategoryId',
        component: SeviceTypeWorker
      },
      {
        path: '/profile/orders',
        component: ProfileOrder
      },
      {
        path: '/profile',
        component: Profile
      },
      {
        path: '/profile/edit',
        component: ProfileEdit
      }
    ],
    redirect: '/'
  }
};

export default route;

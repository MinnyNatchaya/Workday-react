import { useContext, useState } from 'react';
import ServiceCategory from '../components/service/ServiceCategory';
import { UserContext } from '../contexts/userContext';

function Service() {
  return <ServiceCategory />;
}

export default Service;

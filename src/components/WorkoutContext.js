import { createContext } from 'react';

const CheckoutDrawerContext = createContext({
  showDrawer: false,
  toggleCheckoutDrawer: () => {},
});

export default CheckoutDrawerContext;

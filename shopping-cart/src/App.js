import React from 'react';
import { Provider } from 'react-redux';
import Products from '../src/Components/Products';
import Cart from '../src/Components/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';


import store from "./reduxToolKit/store"; // تأكد أن الاستيراد صحيح




const App = () => {
  return (
    <Provider store={store}> {/* تأكد أن store موجود هنا */}
      <div className="container">
        <h1 className="text-center my-4">Shopping Cart</h1>
        <Products />
        <Cart />
      </div>
    </Provider>
  );
};

export default App;
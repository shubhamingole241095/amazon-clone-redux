import ProductDetails from "./components/ProductDetail/ProductDetail";
import Android from "./pages/Android";
import Camera from "./pages/Camera";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import Laptop from "./pages/Laptop";
import React from 'react';
import ReactDOM from 'react-dom';
import Route from './components/main';

ReactDom.render(<Route />, document.getElementById('root'));

 function App() {
         
         <Route exact path="/:category/:id">
            <ProductDetails />
          </Route>
          <Route exact path="/checkout">
            <Checkout />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>

// import {BrowserRouter} from 'react-router-dom'
import Main from './component/Main copy/Main'
import DashBoard from './component/DashBoard/DashBoard';
import DashBoard2 from './component/DashBoard2/DashBoard2';
import Product from './component/Product/Product';
import AddToProduct from './component/AddToProduct/AddToProduct';
import Orders from './component/Orders/Orders';
import OrderView from './component/OrderView/OrderView';
import Transaction from './component/Transaction/Transaction';
import Settings from './component/Settings/Settings';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
     
      <BrowserRouter>
      <Main/>
        {/* <Router> */}
          {/* <Routes>
            <Route path='/' element={<DashBoard/>}/>
            <Route path='/dashboard/dashboard2' element={<DashBoard2/>}/>
            <Route path='/products' element={<Product/>}/>
            <Route path='/AddToProduct' element={<AddToProduct/>}/>
            <Route path="/orders" element={<Orders/>}/>
            <Route path="/orderView" element={<OrderView/>}/>
            <Route path="/transaction" element={<Transaction/>}/>
            <Route path="/settings" element={<Settings/>}></Route> */}

          {/* </Routes> */}
        {/* </Router> */}
      
      </BrowserRouter>
    </div>

    
  );
}

export default App;

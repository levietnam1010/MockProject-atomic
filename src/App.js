import { Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './components/pages/Home/Home';
import CategoryOverview from './components/pages/CategoryOverview/CategoryOverview';
import Category from './components/pages/Category/Category';
import Product from './components/pages/Product/Product';
import Cart from './components/pages/Cart/Cart';
import Profile from './components/pages/MyProfile/Profile';
import Address from './components/pages/MyProfile/Address';



function App() {
  return (

    <>

      {/* <Home></Home> */}
      {/* <CategoryOverview></CategoryOverview> */}
      {/* <Category></Category> */}
      {/* <Product></Product> */}

      <Routes>
        <Route path='*' element={<Home></Home>}></Route>
        <Route path='/category' element={<CategoryOverview ></CategoryOverview>} exact={true}></Route>
        <Route path={`/category/cid=:id`} element={<Category></Category>}></Route>
        <Route path='/productID=:id' element={<Product ></Product>} exact={true}></Route>
        <Route path='/cart' element={<Cart ></Cart>}></Route>
        <Route path='/user/account/profile' element={<Profile></Profile>}></Route>
        <Route path='/user/account/address' element={<Address></Address>}></Route>
      </Routes>


    </>
  );
}

export default App;

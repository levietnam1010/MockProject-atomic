import { Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './components/pages/Home/Home';
import CategoryOverview from './components/pages/CategoryOverview/CategoryOverview';
import Category from './components/pages/Category/Category';
import Product from './components/pages/Product/Product';
import Cart from './components/pages/Cart/Cart';
import Login from './components/pages/Login/Login';

function App() {
  return (
    <div className="container-fluid">
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
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>

    </div>
  );
}

export default App;


import { Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './components/pages/Home/Home';
import CategoryOverview from './components/pages/CategoryOverview/CategoryOverview';
import Category from './components/pages/Category/Category';
import Product from './components/pages/Product/Product';
import Footer from './components/molecules/Footer/Footer';


function App() {
  return (
    <div className="container-fluid">

      <Footer />
      {/* <Home></Home> */}
      {/* <CategoryOverview></CategoryOverview> */}
      {/* <Category></Category> */}
      {/* <Product></Product> */}

      <Routes>
        <Route path='*' element={<Home></Home>}></Route>
        <Route path='/category' element={<CategoryOverview ></CategoryOverview>} exact={true}></Route>
        <Route path={`/category/*`} element={<Category></Category>}></Route>
        <Route path='/product' element={<Product ></Product>} exact={true}></Route>
      </Routes>

    </div>
  );
}

export default App;

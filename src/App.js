import Customer from './components/customer/Customer';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Management from './components/management/Management';
import Product from './components/product/Product';
import './index.css';

function App() {
  return <div className='App'>
    <Header />
    <Hero />
    <Product />
    <Management />
    <Customer />
  </div>;
}

export default App;

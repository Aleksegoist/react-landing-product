import Collaborative from './components/collaborative/Collaborative';
import Company from './components/company/Company';
import Customer from './components/customer/Customer';
import Feedback from './components/feedback/Feedback';
import Gallery from './components/gallery/Gallery';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Management from './components/management/Management';
import People from './components/people/People';
import Price from './components/price/Price';
import Product from './components/product/Product';
import './index.css';

function App() {
  return <div className='App'>
    <Header />
    <Hero />
    <Product />
    <Management />
    <Customer />
    <Collaborative />
    <People />
    <Gallery />
    <Price />
    <Feedback />
    <Company />
  </div>;
}

export default App;

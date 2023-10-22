import { Fragment } from 'react';
import './index.css';
import Navs from './component/Navs/Navs'
import Home from './component/Home/Home';
import About from './component/About/About';
import Blog from './component/blog/Blog';
import Testimonials from './component/Testimonials/Testimonials';
import Faq from './component/faq/Faq';
import Footer from './component/footer/Footer';


function App() {
  return (
    <Fragment>
    <Navs/>
    <Home/>
    <About/>
    <Blog/>
    <Testimonials/>
    <Faq/>
    <Footer/>
    </Fragment>


  );
}

export default App;

import Blogs from './components/Blogs';
import Featured from './components/Featured';
import Footer from './components/Footer';
import Hero from './components/Hero';
import {Navbar} from './components/Navbar';
import Newsletter from './components/Newsletter';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Featured/>
      <Blogs/>
      <Newsletter/>
      <Footer/>
    </div>
  );
}

export default App;

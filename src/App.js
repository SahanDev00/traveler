import Blogs from './components/Blogs';
import Featured from './components/Featured';
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
    </div>
  );
}

export default App;

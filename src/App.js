import Blogs from './components/Blogs';
import Featured from './components/Featured';
import Hero from './components/Hero';
import {Navbar} from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Featured/>
      <Blogs/>
    </div>
  );
}

export default App;

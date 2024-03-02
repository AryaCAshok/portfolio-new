
import './App.css';
import Layout from './components/Layout';
import Mobile from './components/MobileNav/Mobile';
import About from './pages/About';
import Contact from './pages/Contact';
import Project from './pages/Project';
import Techstack1 from './pages/Techstack1';
import Tada from "react-reveal/Tada"


function App() {
  return (
   <>
   <Mobile/>
   <Layout/>
   <div className='container'>
   <About/>
   <br/>
   <br/>
   <br/>
   
   <Techstack1/>
   <br/>
   <br/>
   <br/>
   <Project/>
   <br/>
   <br/>
   <br/>
   <Contact/>
   </div>
  
   <div className='footer pb-3 ms-3'>
    <Tada>
      <h4 className='text-center'>copyright@2024 Portfolio.Build with React</h4>
    </Tada>
   </div>

   </>
   
  );
}

export default App;

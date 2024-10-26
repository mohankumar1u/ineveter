import './App.css';
import routes from './routes';
import {RouterProvider} from "react-router-dom"
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <div className='h-[calc(100vh-100px)] overflow-scroll'>
      <RouterProvider router={routes}/>
      
    </div>
    <Footer/>
    </div>
  );
}

export default App;

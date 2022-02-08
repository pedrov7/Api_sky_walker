import './App.css';

import Menu from './components/Menu';

import {Router} from '@reach/router';
import { Identificacion } from './components/Identificacion';


const App = () => {



  return (

    <div className='row d-flex justify-content-center'>
      
      <div className="col-5">
      <div className="container p-3 my-5 bg-dark text-white">Luke Apiwalker</div>
       
      

        <Router>


        <Menu path='/' />
        <Identificacion path="/:id"/>
      
        </Router> 
        
      
      </div>
    </div>


  );
}

export default App;
